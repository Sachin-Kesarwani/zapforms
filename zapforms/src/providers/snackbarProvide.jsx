
"use client"
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarContext = React.createContext();

export const useSnackbar = () => {
  const context = React.useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: '',
    severity: 'success', // You can set default severity
  });

  const showSnackbar = ({ message, severity = 'success', autoHideDuration = 6000 }) => {
    setSnackbar({ open: true, message, severity, autoHideDuration });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={snackbar.autoHideDuration} 
        onClose={handleClose}
        anchorOrigin={ {vertical: 'top', horizontal: 'center'} }
      >
        <Alert 
          onClose={handleClose} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
