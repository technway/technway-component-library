import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  } as React.CSSProperties,
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      style={styles.button}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
    >
      {label}
    </button>
  );
};

export default Button;
