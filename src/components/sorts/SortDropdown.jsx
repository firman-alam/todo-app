import SortItem from './SortItem';
import { sortList } from '../../helpers/helper';
import './sort.scss';

const SortDropdown = () => {
  return (
    <div className='sort__dropdown'>
      <div data-cy='sort-parent' className='sort__wrapper'>
        {sortList.map((item) => (
          <SortItem key={item.title} title={item.title} type={item.type} />
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;
