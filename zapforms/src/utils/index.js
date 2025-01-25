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
  