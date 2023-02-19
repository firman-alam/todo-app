import {
  TbSortAscending,
  TbSortDescending,
  TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbArrowsSort,
} from 'react-icons/tb';

const SortType = ({ type }) => {
  switch (type) {
    case 'NEW':
      return <TbSortAscending className='icon' />;
    case 'OLD':
      return <TbSortDescending className='icon' />;
    case 'AZ':
      return <TbSortAscendingLetters className='icon' />;
    case 'ZA':
      return <TbSortDescendingLetters className='icon' />;
    case 'INCOMPLETE':
      return <TbArrowsSort className='icon' />;
    default:
      return <TbArrowsSort className='icon' />;
  }
};

export default SortType;
