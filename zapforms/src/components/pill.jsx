import React from 'react';

// Pill component
const Pill = ({ label, color = '#4caf50', textColor = '#fff', onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: '16px',
        backgroundColor: color,
        color: textColor,
        fontSize: '14px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease-in-out',
      }}
      onMouseEnter={(e) => {
        // Add hover effect
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
    >
      {label}
    </div>
  );
};

export default Pill;
