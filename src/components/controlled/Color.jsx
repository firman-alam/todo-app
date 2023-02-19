const Color = ({ type }) => {
  switch (type) {
    case 'Very High':
    case 'very-high':
      return <span className='color red' />;
    case 'High':
    case 'high':
      return <span className='color yellow' />;
    case 'Medium':
    case 'normal':
      return <span className='color green' />;
    case 'Low':
    case 'low':
      return <span className='color blue' />;
    case 'Very Low':
    case 'very-low':
      return <span className='color purple' />;
    default:
      return null;
  }
};

export default Color;
