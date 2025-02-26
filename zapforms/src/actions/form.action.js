import { createformApi, formListApi, respondformApi } from "../constants/apis"
import actionHelpers from "./action.helper"
import { getGetHeaders, getPostHeader, getServerSideGetHeaders } from "./global.action"




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


export const getRespondformAction=async ({id  , token})=>{
    const GET_HEADER = await getServerSideGetHeaders({token})
    return fetch(`${respondformApi}/${id}` , GET_HEADER)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then ((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}


export const getformList=async ({token})=>{
    const GET_HEADER = await getServerSideGetHeaders({token})
    console.log(GET_HEADER  , formListApi)
    return fetch(`${formListApi}` , GET_HEADER)
    .then(actionHelpers.checkStatus)
    .then(actionHelpers.parseJSON)
    .then ((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}