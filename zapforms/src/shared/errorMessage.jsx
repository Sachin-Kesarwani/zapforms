import React from 'react'
import { capitalizeFirstChar } from '../utils'

const ErrorMessage = ({message}) => {
  return    <p className="text-[10px] text-red-700">{capitalizeFirstChar(message) }</p>
}

export default ErrorMessage;
