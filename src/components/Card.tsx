// components/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4">
      {children}
    </div>
  );
};

export default Card;
