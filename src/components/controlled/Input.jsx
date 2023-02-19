import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { setModalForm } from '../../app/reducers/modalFormSlice';
import { useCreateTodoMutation } from '../../app/api/todoApiSlice';
import { useParams } from 'react-router-dom';

const Input = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [createTodo] = useCreateTodoMutation();
  const { title, priority, ...other } = useSelector((state) => state.modalForm);

  const createTodoHandler = () => {
    if (!title) {
      return;
    }
    const payload = {
      title: title,
      activity_group_id: id,
    };
    createTodo(payload);
    dispatch(
      setModalForm({
        isOpen: false,
        isDropDownItem: false,
        title: '',
        priority: 'Very High',
      })
    );
  };

  const handleChange = useMemo(() => {
    return (e) => {
      dispatch(
        setModalForm({
          title: e.target.value,
        })
      );
    };
  }, [title, priority]);

  const onSubmitWithEnter = async (e) => {
    if (e.key === 'Enter') await createTodoHandler();
  };

  return (
    <input
      id='item-name'
      value={title}
      autoFocus
      onChange={handleChange}
      onKeyDown={onSubmitWithEnter}
      data-cy='modal-add-name-input'
    />
  );
};

export default Input;
