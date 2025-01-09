import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
}

const styles = {
  container: {
    padding: '1rem',
    backgroundColor: '#f4f4f4',
    borderRadius: '4px',
    border: '1px solid #ddd',
    textAlign: 'center',
  } as React.CSSProperties,
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div style={styles.container}>{children || 'Card'}</div>;
};

export default Card;
