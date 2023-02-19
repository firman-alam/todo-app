import './controlled.scss';

import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { setModalForm } from '../../app/reducers/modalFormSlice';

const FormHeader = () => {
  const dispatch = useDispatch();
  const { titleForm, ...other } = useSelector((state) => state.modalForm);

  const closeModal = () => {
    const payload = {
      priority: '',
      isOpen: false,
      is_active: false,
      isSubmitted: false,
      isDropDownOpen: false,
      titleForm: 'Tambahkan List Item',
    };
    dispatch(setModalForm(payload));
  };
  return (
    <div className='modal__header'>
      <p data-cy='modal-add-title'>{titleForm}</p>
      <GrClose
        className='icon'
        onClick={closeModal}
        data-cy='modal-add-close-button'
      />
    </div>
  );
};

export default FormHeader;
