import { getRespondformAction } from "@/src/actions/form.action";
import Respondformcomponenet from "@/src/components/forms/respondform";

const Page = async ({ params }) => {
  const { id } = params; 
  const {data} = await getRespondformAction({id});
  console.log(data)
  return <div><Respondformcomponenet data={data}/></div>;
};

export default Page;
