import { createformApi } from "../constants/apis"
import actionHelpers from "./action.helper"
import { getPostHeader } from "./global.action"




export const createform=async ({body})=>{
    const POST_HEADER = await getPostHeader({body  , passToken:true})
    return fetch(createformApi , POST_HEADER)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then ((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}