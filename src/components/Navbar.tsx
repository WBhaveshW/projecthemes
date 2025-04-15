// components/Button.tsx

import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
