import Cards from './Cards';
import person from '../../assets/person.svg';
import Person from '../controlled/Person';

const Content = ({ items, createGroup }) => {
  return (
    <>
      {items.length ? (
        <Cards items={items} />
      ) : (
        <Person
          src={person}
          onClick={createGroup}
          data-cy='activity-empty-state'
        />
      )}
    </>
  );
};

export default Content;
