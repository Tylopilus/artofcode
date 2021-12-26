import React from 'react';

const Button = ({
  children,
  active = false,
}: {
  children?: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <button
      className={`border rounded-full px-6 py-2 ${
        active ? 'bg-gray-500' : ''
      }`}>
      {children}
    </button>
  );
};

export default Button;
