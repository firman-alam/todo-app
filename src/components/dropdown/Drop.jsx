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
      className='drop'
      onClick={setPriority}
      data-cy='modal-add-priority-item'
    >
      <Color type={title} />
      <span>{title}</span>
    </button>
  );
};
export default Drop;
