"use client"
import { deleteData } from '../_actions/actions'

const DeleteButton = (id:string) => {
    console.log(id);
  return (
    <button onClick={async()=> await deleteData(id)} className='bg-red-700 px-2 text-white'>Delete</button>
  )
}

export default DeleteButton