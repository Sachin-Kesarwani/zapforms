
const baseUrl = process.env.baseUrl||"http://localhost:5000/";
export const signupApi = `${baseUrl}auth/signup`;
export const loginpApi = `${baseUrl}auth/login`;
export const verifyOtpApi = `${baseUrl}auth/verify-otp`
export const createformApi = `${baseUrl}form/createform`;