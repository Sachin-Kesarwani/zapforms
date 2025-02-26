import Cookies from "js-cookie";
import { USER_TOKEN } from "../constants";



export const getGetHeaders=({type="application/json" ,     passToken=false
})=>{
  const token = Cookies.get(USER_TOKEN);
  let res =  {
    credentials: 'Access-Control-Allow-Headers', // 'same-origin',
    Origin: window.location.origin||"",
    headers: {
      Accept: type,
    },
    method: 'GET', 
 }
 if(passToken){
  res.headers["authorization"]=`Bearer ${token}`

 }
 return res
}

export const getServerSideGetHeaders = ({ type = "application/json",token=""}) => {
  let res = {
    credentials: "include", // ✅ Correct value
    headers: {
      Accept: type,
    },
    method: "GET",
  };
  if (token) {
    res.headers["authorization"] = `Bearer ${token}`;
  }

  return res;
};

export const getPostHeader=({  
    body,
    type = 'application/json',
    contentType = 'application/json',
    passToken=false
})=>{
  const token = Cookies.get(USER_TOKEN);
  const res= {
    body:JSON.stringify(body),
    method:"POST",
    headers: {
        'Content-Type': `${contentType};charset=utf-8`,
        Accept: type,
      },
    credentials: 'same-origin',
   }
   if(passToken){
    res.headers["authorization"]=`Bearer ${token}`
   }
   return res
}