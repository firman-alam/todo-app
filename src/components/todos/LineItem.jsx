import { useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useUpdateTodoMutation } from '../../app/api/todoApiSlice.js';
import { setModalAlert } from '../../app/reducers/modalAlertSlice.js';
import { setModalForm } from '../../app/reducers/modalFormSlice.js';
import Color from '../controlled/Color.jsx';

const LineItem = ({ id, title, priority, is_active }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(is_active ? false : true);
  const [updateTodo] = useUpdateTodoMutation();

  const payload = {
    is_active: checked ? 1 : 0,
  };

  const handleCheck = async () => {
    setChecked(!checked);
    await updateTodo({ id, ...payload });
  };

  const handleEdit = () => {
    dispatch(
      setModalForm({
        isOpen: true,
        title: title,
        priority: priority,
        titleForm: 'Edit Item',
        id: id,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      setModalAlert({
        type: 'Item',
        isOpen: true,
        id: id,
        title: title,
      })
    );
  };

  return (
    <li className='item' data-cy='todo-item'>
      <div className='item__left'>
        <input
          data-cy='todo-item-checkbox'
          type='checkbox'
          name='prior'
          id='prior'
          onChange={handleCheck}
          checked={checked}
        />
        <Color type={priority} />
        <label htmlFor='prior' data-cy='todo-item-title'>
          {title}
        </label>
        <HiOutlinePencil
          onClick={handleEdit}
          className='icon'
          data-cy='todo-item-edit-button'
        />
      </div>
      <div className='item__right'>
        <HiOutlineTrash
          className='icon'
          data-cy='todo-item-delete-button'
          onClick={handleDelete}
        />
      </div>
    </li>
  );
};

export default LineItem;
