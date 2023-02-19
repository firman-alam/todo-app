import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setModalForm } from '../../app/reducers/modalFormSlice';
import Color from '../controlled/Color';

const Drop = ({ id, title }) => {
  const dispatch = useDispatch();

  const setPriority = useCallback(() => {
    const payload = {
      priority: title,
      isDropDownOpen: false,
    };
    dispatch(setModalForm(payload));
  }, [dispatch]);

  return (
    <button
      id={id}
      onClick={setPriority}
      data-cy='modal-add-priority-item'
      className='drop'
    >
      <Color type={title} />
      <span>{title}</span>
    </button>
  );
};
export default Drop;
