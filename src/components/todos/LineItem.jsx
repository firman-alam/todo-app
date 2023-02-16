import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
      <div className='item__left'>
        <input
          type='checkbox'
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />
        <label
          style={item.checked ? { textDecoration: 'line-through' } : null}
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.title}
        </label>
        <HiOutlinePencil className='icon' />
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
