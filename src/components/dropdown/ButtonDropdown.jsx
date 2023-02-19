import { useDispatch, useSelector } from 'react-redux';

import { setModalForm } from '../../app/reducers/modalFormSlice';
import { capsLetter } from '../../helpers/helper';
import Color from '../controlled/Color';

const ButtonPriority = () => {
  const dispatch = useDispatch();
  const { isDropDownOpen, priority, ...other } = useSelector(
    (state) => state.modalForm
  );

  const showDropDown = () => {
    dispatch(setModalForm({ isDropDownOpen: !isDropDownOpen }));
  };

  const newPriority = capsLetter(priority);

  return (
    <button
      onClick={showDropDown}
      data-cy='modal-add-priority-dropdown'
      className='show-dropdown'
    >
      <Color type={priority} />
      <span>{newPriority}</span>
    </button>
  );
};

export default ButtonPriority;
