import { Skeleton } from '@heroui/react'
import React from 'react'

const loading = () => {
  return (
    <div key={"loading_container"} className="w-[100%] px-6 py-3 md:w-[80%]  xl:w-[60%] 2xl:w-[60%]">
      {
        [1 , 2 , 3 ].map((item)=>{
            return <Skeleton variant="rounded" width={"100%"} height={"200px"} />
        })
      }
    </div>
  )
}

export default loading
