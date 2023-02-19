import { TbCheck } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../app/reducers/sortOptionsSlice';
import SortType from './SortType';

const SortItem = ({ title, type }) => {
  const dispatch = useDispatch();
  const { sortBy, isOpen } = useSelector((state) => state.sortOption);

  const handleClick = () => {
    dispatch(setSort({ sortBy: type, isOpen: false }));
  };

  return (
    <button
      onClick={handleClick}
      data-cy='sort-selection'
      className='sort__items'
    >
      <div className='sort__item'>
        <SortType type={type} />
        <span data-cy='sort-selection-title'>{title}</span>
      </div>
      {sortBy === type && <TbCheck className='icon last' />}
    </button>
  );
};

export default SortItem;
