import './modal.scss';
import { TbInfoCircle } from 'react-icons/tb';

const ModalInfo = ({ type }) => {
  return (
    <div
      className='modal__info'
      data-cy='modal-information'
      onClick={(e) => e.stopPropagation()}
    >
      <TbInfoCircle data-cy='modal-information-icon' className='icon' />
      <p data-cy='modal-information-title'>{type} Berhasil dihapus</p>
    </div>
  );
};

export default ModalInfo;
