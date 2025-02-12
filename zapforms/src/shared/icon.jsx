import React from 'react'
import { MdCancel } from "react-icons/md";

const Icon = ({type , color , size}) => {
    const icons={
      cancel:<MdCancel color={color} size={size} />

    }
  return icons[type]
}

export default Icon
