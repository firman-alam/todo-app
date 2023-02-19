import LineItem from './LineItem';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          id={item.id}
          title={item.title}
          priority={item.priority}
          is_active={item.is_active}
        />
      ))}
    </ul>
  );
};

export default ItemList;
