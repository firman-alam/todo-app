import LineItem from './LineItem';

const ItemList = ({ items, handleEdit, handleDelete, handleUpdateForm }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleUpdateForm={handleUpdateForm}
        />
      ))}
    </ul>
  );
};

export default ItemList;
