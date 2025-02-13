export let standardMargin =
  'mx-6 phone:mx-5 bigPhone:mx-8 tablet:mx-10 maxTablet:mx-16  laptop:mx-24  desktop:mx-32';


  export const validateRequiredFields = (formData, requiredFields) => {
    const errors = {};
  
    // Iterate over the required fields and check if they exist in the formData
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
  
    // If there are errors, return isValid: false and the error object
    if (Object.keys(errors).length > 0) {
      return { isValid: false, error: errors };
    }
  
    // If no errors, return isValid: true and an empty error object
    return { isValid: true, error: {} };
  };
  
  [
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
  export function validateFormArray(formArray = []) {
    const required = {
      text: ["label"],
      textarea: ["label"],
      email: ["label"],
      password: ["label"],
      number: ["label"],
      date: ["label"],
      tel: ["label"],
      select: ["label", "options"],
      checkbox: ["label", "options"],
      radio: ["label", "options"],
      range: ["label", "minrange", "maxrange"],
    };
  
    let isFullFormValid = true;
  
    const validatedData = formArray
      // .filter((item) => Object.keys(item).length > 0)
      .map((item, index) => {
        const { type = "" } = item;
        const isError = {};
  
        if (type && required[type]) {
          required[type].forEach((key) => {
            if (!item[key] || item[key].length === 0) {
              isError[key] = `${key} is required`;
            }
          });
        }else{
          required[type].forEach((key)=>{
            isError[key] = `${key} is required`;          })
        }
  
        if (Object.keys(isError).length > 0) {
          isFullFormValid = false;
        }
  
        return {
          ...item,
          errors: Object.keys(isError).length > 0 ? isError : undefined,
        };
      });
  
    return {
      data: validatedData,
      isFullFormValid,
    };
  }
  