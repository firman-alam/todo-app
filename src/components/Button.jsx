import React from 'react';

function Button({ Icon, name, createNew }) {
  return (
    <>
      {Icon && (
        <div className='content__button' onClick={createNew}>
          <Icon className='iconplus' /> <span>{name}</span>
        </div>
      )}
    </>
  );
}

export default Button;
