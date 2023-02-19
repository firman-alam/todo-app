const ClickOutside = ({ children, ...props }) => {
  return (
    <div {...props} className='click__outside'>
      {children}
    </div>
  );
};

export default ClickOutside;
