import React from 'react';
import Icon from '../shared/icon';

// Pill component
const Pill = ({ label, color = '#4caf50', textColor = '#fff', onClickIcon=()=>{}, showIcon=false }) => {
  return (
    <div
    className="mr-2 flex flex-row items-center"
    style={{
      display: 'inline-flex',
      padding: '4px 6px',
      borderRadius: '16px',
      backgroundColor: color,
      color: textColor,
      fontSize: '12px',
      transition: 'transform 0.2s ease-in-out',
      gap: '4px', // Adds spacing between label and icon
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.1)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
    }}
  >
    {label}
   {showIcon && <button onClick={()=>onClickIcon(label)}  className='cursor-pointer'>
      <Icon type="cancel" size={14} color={"white"} />
    </button>}
  
  </div>
  
  );
};

export default Pill;
