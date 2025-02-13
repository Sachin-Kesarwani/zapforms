import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useState } from 'react';
import { CreateformContext } from '@/src/context';

const formFields = [
  { id: "textInput", title: "Text", value: "", type: "text" },
  { id: "textAreaInput", title: "TextArea", value: "", type: "textarea" },
  { id: "emailInput", title: "Email", value: "", type: "email" },
  { id: "passwordInput", title: "Password", value: "", type: "password" },
  { id: "dateInput", title: "Date", value: "", type: "date" },
  { id: "numberInput", title: "Number", value: "", type: "number" },
  { id: "phoneInput", title: "Phone", value: "", type: "tel" },
  { id: "selectInput", title: "Select", value: "", type: "select",  },
  { id: "checkboxInput", title: "Checkbox", value: false, type: "checkbox" },
  { id: "radioInput", title: "Radio", value: "", type: "radio", },
  // { id: "fileInput", title: "File", value: "", type: "file" },
  { id: "rangeInput", title: "Range", value: "", type: "range", min: 0, max: 100 },
];

const ITEM_HEIGHT = 48;

export default function FormTypeMenu({fieldIndex , seletedType}) {
  const [anchorEl, setAnchorEl] =useState(null);
  let {updateFormdata} = useContext(CreateformContext)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ({index,item}) => {
    setAnchorEl(null);
    const {type} = item;
    updateFormdata({index , data:{type} })
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        {formFields.map((option , index) => (
          <MenuItem className={``} key={index.toString()} selected={option.type ===seletedType} onClick={()=>handleClose({index:fieldIndex , item:option})}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}