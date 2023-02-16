import ItemList from './ItemList';
import person from '../assets/person.svg';

const Content = ({ items, handleEdit, handleDelete, handleUpdateForm }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleUpdateForm={handleUpdateForm}
        />
      ) : (
        <div className='nullData' data-cy='Item-List-empty-state'>
          <img src={person} alt='person' className='person' />
        </div>
      )}
    </>
  );
};

export default Content;
