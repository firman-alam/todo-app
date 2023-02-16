import {
  TbSortAscending,
  TbSortDescending,
  TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbArrowsSort,
} from 'react-icons/tb';

function Dropdown() {
  return (
    <ul className='menu' data-cy='sort'>
      <li className='menu__item'>
        <TbSortAscending className='icon' />
        <span>Terbaru</span>
      </li>
      <li className='menu__item'>
        <TbSortDescending className='icon' />
        <span>Terlama</span>
      </li>
      <li className='menu__item'>
        <TbSortAscendingLetters className='icon' />
        <span>A-Z</span>
      </li>
      <li className='menu__item'>
        <TbSortDescendingLetters className='icon' />
        <span>Z-A</span>
      </li>
      <li className='menu__item'>
        <TbArrowsSort className='icon' />
        <span>Belum Selesai</span>
      </li>
    </ul>
  );
}

export default Dropdown;
