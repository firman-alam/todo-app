import { useSelector } from 'react-redux';
import { priority } from '../../helpers/helper';
import Drop from './Drop';

const Dropdown = () => {
  const { isDropDownOpen, ...other } = useSelector((state) => state.modalForm);

  if (isDropDownOpen) {
    return (
      <div data-cy='modal-add-priority-dropdown' className='dropdown'>
        {priority.map((item) => (
          <Drop key={item.id} {...item} />
        ))}
      </div>
    );
  }

  return null;
};

export default Dropdown;
