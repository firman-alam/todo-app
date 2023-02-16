import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

const LineItem = ({ item, handleEdit, handleDelete, handleUpdateForm }) => {
  return (
    <li className='item'>
      <div className='item__left'>
        <input type='checkbox' />
        <label>{item.title}</label>
        <HiOutlinePencil
          className='icon'
          onClick={() => {
            handleEdit(item);
            handleUpdateForm();
          }}
        />
      </div>
      <div className='item__right'>
        <HiOutlineTrash
          className='icon'
          onClick={() => handleDelete(item.id)}
          role='button'
          tabIndex='0'
          aria-label={`Delete ${item.item}`}
        />
      </div>
    </li>
  );
};

export default LineItem;
