import Card from './Card';

const Cards = ({ items }) => {
  return (
    <ul className='cards'>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Cards;
