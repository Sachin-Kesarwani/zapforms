import React from 'react'
import { MdCancel } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaShare } from "react-icons/fa6";
import { IoMdRefreshCircle } from "react-icons/io";

const Icon = ({type , color , size}) => {
    const icons={
      cancel:<MdCancel color={color} size={size} />,
      left_arrow:<MdOutlineKeyboardArrowLeft color={color} size={size} />,
      share:<FaShare color={color} size={size} />,
      refresh:<IoMdRefreshCircle color={color} size={size} />

    }
  return icons[type]
}

export default Icon
