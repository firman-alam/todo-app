import { HiOutlineTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function getMonthName(monthIndex) {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  return monthNames[monthIndex];
}

function Card({ id, title, date, deleteCard }) {
  const navigate = useNavigate();

  const formattedDate = formatDate(date);

  return (
    <section className='card'>
      <div className='card__container'>
        <p onClick={() => navigate(`/activity/${id}`)}>{title}</p>
        <div className='card__footer'>
          <span>{formattedDate}</span>
          <HiOutlineTrash className='icon' onClick={() => deleteCard(id)} />
        </div>
      </div>
    </section>
  );
}

export default Card;
