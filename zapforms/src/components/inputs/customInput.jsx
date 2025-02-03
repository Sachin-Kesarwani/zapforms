import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CustomInput = ({ fieldIndex, updateFormdata, type ,showRightIcon=false }) => {
  // Step 1: Create state for input value
  const [inputValue, setInputValue] = useState('');

  // Step 2: Handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Step 3: Clear input value on button click
  const handleButtonClick = () => {
    setInputValue(''); // Clear the input
    updateFormdata({
      value: inputValue, // Optional: Clear placeholder in your form data
    });
  };

  return (
      <div>
        <TextField
          id="outlined-multiline-static"
          value={inputValue} // Step 4: Bind value to state
          type="text"
          className="h-8"
          onChange={handleInputChange} // Handle input change
        />
      { showRightIcon && <IconButton
          onClick={handleButtonClick} // Step 5: Handle button click
          sx={{ p: '10px' }}
          aria-label="menu"
        >
          <AddCircleIcon />
        </IconButton>}
      </div>
  );
};

export default CustomInput;
