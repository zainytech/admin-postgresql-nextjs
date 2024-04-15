// "use client"

import Link from "next/link"
import { fetchData } from "./_actions/actions";
import DeleteButton from "./_components/DeleteButton";

const Admin = async() => {

const allContent = await fetchData();
// console.log(allContent,"all");

  return (

    <>
        <div>Admin</div>
        <h1>Create new data for website</h1>
        <Link href={`/admin/create`}><button className="px-2 bg-green-700 text-white m-2" >Create</button></Link>
        <h1>The data in db</h1> 
{allContent.map((content)=>(
  <div className='flex flex-col m-10 border-2 border-gray-600 p-2 w-auto' key={content.id}>
      <div className='flex gap-2'><label>Main heading:</label>
      <p>{content.mainHeading}</p></div>

      <div className='flex gap-2'><label>Heading 1:</label>
      <p>{content.subTitle1}</p></div>

      <div className='flex gap-2'><label>Sub Para 1:</label>
      <p>{content.subPara1}</p></div>

      <div className='flex gap-2'><label>Sub heading 2:</label>
      <p>{content.subTitle2}</p></div>
      
      <div className='flex gap-2' ><label>Sub Para 2:</label>
      <p>{content.subPara2}</p></div>
      
      <div className='flex gap-2'><label>Sub heading 3:</label>
      <p>{content.subTitle3}</p></div>

      <div className='flex gap-2'><label>Sub Para 3:</label>
      <p>{content.subPara3}</p></div>
      <div className='flex gap-5 m-5'>
      <button className='bg-green-700 px-2 text-white'>Add</button>
      <Link href={`/admin/update/${content.id}`}><button className='bg-blue-700 px-2 text-white'>Update</button></Link>
      <DeleteButton id={content.id}/>
      
      
      </div>
    </div>
))}
    
    </>
   
  )
}

export default Admin