import { useDispatch, useSelector } from 'react-redux';
import { useDeleteGroupMutation } from '../../app/api/groupApiSlice';
import { useDeleteTodoMutation } from '../../app/api/todoApiSlice';
import { setModalAlert } from '../../app/reducers/modalAlertSlice';
import { TbAlertTriangle } from 'react-icons/tb';
import Button from '../controlled/Button';

const ModalAlert = () => {
  const dispatch = useDispatch();
  const { type, id, title, ...other } = useSelector(
    (state) => state.modalAlert
  );

  const [deleteGroup] = useDeleteGroupMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const closeModal = () =>
    dispatch(setModalAlert({ isOpen: false, isDeleteComplete: false }));

  const handleDelete = async () => {
    if (type === 'activity') {
      deleteGroup(id);
    } else {
      deleteTodo(id);
    }
    dispatch(setModalAlert({ isDeleteComplete: true }));
  };

  return (
    <div
      data-cy='modal-delete'
      onClick={(e) => e.stopPropagation()}
      className='alert'
    >
      <TbAlertTriangle className='icon' data-cy='modal-delete-icon' />
      <p data-cy='modal-delete-title'>
        Apakah anda yakin menghapus {type} {''}
        <span>“{title}”?</span>
      </p>
      <div className='buttons'>
        <Button data-cy='modal-delete-cancel-button' onClick={closeModal}>
          Batal
        </Button>
        <Button data-cy='modal-delete-confirm-button' onClick={handleDelete}>
          Hapus
        </Button>
      </div>
    </div>
  );
};

export default ModalAlert;
