import * as React from 'react';

export const Form = ({ onSubmit, children, className = '' }) => {
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
    </form>
  );
};
