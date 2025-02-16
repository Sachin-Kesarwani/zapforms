export let standardMargin =
  'mx-6 phone:mx-5 bigPhone:mx-8 tablet:mx-10 maxTablet:mx-16  laptop:mx-24  desktop:mx-32';


  export const validateRequiredFields = (formData, requiredFields) => {
    const errors = {};
  
    // Iterate over the required fields and check if they exist in the formData
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      } else if (field === "email" && !isValidEmail(formData[field])) {
        // If the field is email, validate its format
        errors[field] = "Invalid email address";
      }
    });
 
    // If there are errors, return isValid: false and the error object
    if (Object.keys(errors).length > 0) {
      return { isValid: false, error: errors };
    }
  
    // If no errors, return isValid: true and an empty error object
    return { isValid: true, error: {} };
  };
  export const isValidEmail = (email) => {
    // This regex pattern is a common approach to validate email addresses.
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
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
      range: ["label", "maxrange"],
    };
  
    let isFullFormValid = true;
  
    const validatedData = formArray
      .map((item, index) => {
        const { type = ""  , validation={}} = item;
        const isError = {};
  
        if (type && required[type]) {
          required[type].forEach((key) => {
            if(key=="maxrange"){
              const { maxrange}  = validation
              if(!maxrange || maxrange==0){
                isError[key] = `${key} is required`;
              }
            }else if (!item[key] || item[key].length === 0) {
              isError[key] = `${key} ${key=="options"?"are":"is"} required`;
            }
          });
        }else{
          required[type].forEach((key)=>{
            isError[key] = `${key} ${key=="options"?"are":"is"} required`;          })
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
  

  export function capitalizeFirstChar(text="") {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }