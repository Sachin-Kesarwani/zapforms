import { getformList } from '@/src/actions/form.action'
import EachformCard from '@/src/components/EachformCard';
import { SUCCES_STATUS } from '@/src/constants/status';
import { cookies } from 'next/headers';
import React from 'react'

const page = async () => {
    const token = cookies().get("USER_TOKEN")?.value;
  const {status , data} = await getformList({token})
  if(status!==SUCCES_STATUS){
    return <div><h2>Something went wrong</h2></div>
  }
  return (
    <div       className="flex flex-col justify-center items-center my-6"
>
      {
        data.map((item)=>{
          return <EachformCard data={item}/>
        })
      }
    </div>
  )
}

export default page
