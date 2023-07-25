import React from 'react';

const Card = ({ children }) => {
  const cardStyle = {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    background: '#fff',
    // Add other styles as needed
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
