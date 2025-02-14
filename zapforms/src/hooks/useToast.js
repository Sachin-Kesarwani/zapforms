"use client"
import { useState, useCallback } from 'react';

export function useToast() {
  const [toastState, setToastState] = useState({
    open: false,
    message: '',
    vertical: 'top',
    horizontal: 'center',
  });

  const showToast = useCallback((message, position = { vertical: 'top', horizontal: 'center' }) => {
    setToastState({ open: true, message, ...position });
  }, []);

  const hideToast = useCallback(() => {
    setToastState((prev) => ({ ...prev, open: false }));
  }, []);

  return { toastState, showToast, hideToast };
}
