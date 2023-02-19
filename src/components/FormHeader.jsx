import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { setModalForm } from '../app/reducers/modalFormSlice';

const FormHeader = () => {
  const dispatch = useDispatch();
  const { titleForm, ...other } = useSelector((state) => state.modalForm);

  const closeModal = () => {
    const payload = {
      isOpen: false,
      isSubmitted: false,
      titleForm: 'Tambahkan List Item',
      priority: '',
      isDropDownOpen: false,
      is_active: false,
    };
    dispatch(setModalForm(payload));
  };
  return (
    <div className='modal__header'>
      <p data-cy='modal-add-title'>{titleForm}</p>
      <GrClose
        data-cy='modal-add-close-button'
        onClick={closeModal}
        className='icon'
      />
    </div>
  );
};

export default FormHeader;
