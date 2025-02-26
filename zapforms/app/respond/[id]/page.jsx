import { getRespondformAction } from "@/src/actions/form.action";
import Respondformcomponenet from "@/src/components/forms/respondform";
import { cookies } from "next/headers";

const Page = async ({ params }) => {
  const { id } = params; 
  const token = cookies().get("USER_TOKEN")?.value;
  const {data} = await getRespondformAction({id  , token});
  if(!data){
    return <div><h1>Not found</h1></div>
  }
  console.log(data)
  return <div><Respondformcomponenet data={data}/></div>;
};

export default Page;
