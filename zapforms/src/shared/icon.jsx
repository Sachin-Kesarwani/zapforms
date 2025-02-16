import React from 'react'
import { MdCancel } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Icon = ({type , color , size}) => {
    const icons={
      cancel:<MdCancel color={color} size={size} />,
      left_arrow:<MdOutlineKeyboardArrowLeft color={color} size={size} />

    }
  return icons[type]
}

export default Icon
