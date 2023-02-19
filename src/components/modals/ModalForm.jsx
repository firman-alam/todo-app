import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  useCreateTodoMutation,
  useUpdateTodoMutation,
} from '../../app/api/todoApiSlice';
import { setModalForm } from '../../app/reducers/modalFormSlice';

import Input from '../controlled/Input';
import Button from '../controlled/Button';
import Dropdown from '../dropdown/Dropdown';
import ButtonPriority from '../dropdown/ButtonDropdown';
import FormHeader from '../controlled/FormHeader';

const ModalForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    title,
    priority,
    titleForm,
    id: todoId,
    ...other
  } = useSelector((state) => state.modalForm);

  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleSubmit = async () => {
    const payload = {
      title: title,
      priority:
        priority === 'Medium'
          ? 'normal'
          : priority.replace(' ', '-').toLowerCase(),
    };

    if (!title) {
      return;
    }
    if (titleForm === 'Tambahkan List Item') {
      await createTodo({ activity_group_id: id, title: title });
      dispatch(
        setModalForm({
          isOpen: false,
          isDropDownItem: false,
          title: '',
          priority: 'Very High',
        })
      );
    } else {
      await updateTodo({ id: todoId, ...payload });
      dispatch(
        setModalForm({
          isOpen: false,
          isDropDownItem: false,
          title: '',
          priority: 'Very High',
        })
      );
    }
  };

  return (
    <div
      data-cy='modal-add'
      className='modal'
      onClick={(e) => e.stopPropagation()}
    >
      <FormHeader />
      <hr />
      <div className='modal__form'>
        <section>
          <label htmlFor='nama' data-cy='modal-add-name-title'>
            Nama List Item
          </label>
          <Input />
        </section>
        <section>
          <label data-cy='modal-add-priority-title'>Priority</label>
          <ButtonPriority />
          <Dropdown />
        </section>
      </div>
      <hr />
      <div className='modal__footer'>
        <Button
          onClick={handleSubmit}
          data-cy='modal-add-save-button'
          disabled={title.length > 0 ? false : true}
        >
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default ModalForm;
