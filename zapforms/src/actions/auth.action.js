import { loginpApi, signupApi, verifyOtpApi } from "../constants/apis";
import actionHelpers from "./action.helper";
import { getPostHeader } from "./global.action";



export async function createUser({body}){
    const POST_HEADER = await getPostHeader({body})
    return fetch(signupApi , POST_HEADER)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}
export async function loginUser({body}){
    const POST_HEADER = await getPostHeader({body})
    return fetch(loginpApi , POST_HEADER)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}
export async function verifyOtp({body}){
    const POST_HEADER = await getPostHeader({body})
    return fetch(verifyOtpApi , POST_HEADER)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}