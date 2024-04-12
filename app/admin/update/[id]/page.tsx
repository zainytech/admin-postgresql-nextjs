import React from 'react'
import Form from '../../_components/Form'
import prisma from '@/db/db'

const Update = async({ params: { id },
}: {
  params: { id: string } }) => {
  const content = await prisma.content.findUnique({ where: {id}})
  return (

    <div>Update The Content
        <Form content = {content}/>
    </div>
  )
}

export default Update