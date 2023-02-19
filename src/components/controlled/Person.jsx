function Person({ onClick = () => null, ...props }) {
  return (
    <figure onClick={onClick} className='nullData'>
      <img alt='activity' {...props} className='person' />
    </figure>
  );
}

export default Person;
