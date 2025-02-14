import React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function ToastComponent({ toastState, hideToast }) {
  const { open, message, vertical, horizontal } = toastState;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={hideToast}
      message={message}
      key={vertical + horizontal}
      autoHideDuration={3000} // Optional: Auto-close after 3 seconds
    />
  );
}
