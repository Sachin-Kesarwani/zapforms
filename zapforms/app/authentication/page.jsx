"use client"
import AuthenticationComp from '@/src/components/signup';
import { useToast } from '@/src/hooks/useToast';
import ToastComponent from '@/src/shared/toast';
import React from 'react'

const Authentication = () => {
  const { toastState, showToast, hideToast } = useToast();

  return (
    <div>
      <AuthenticationComp/>
      <ToastComponent toastState={toastState} hideToast={hideToast} />
    </div>
  )
}

export default Authentication;
