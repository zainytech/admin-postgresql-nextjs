"use server"

import prisma from "@/db/db";
import { redirect } from "next/navigation";
import fs from "fs/promises"

import {z} from 'zod';

const videoSchema = z.instanceof(File, { message: "Required" })
const imageSchema = videoSchema.refine(
  file => file.size === 0 || file.type.startsWith("image/")
)
const gifSchema = videoSchema.refine(
    file => file.size ===0 || file.type.startsWith("image/gif")
)

const addSchema = z.object({
    mainHeading: z.string().min(1),
    subHeading1: z.string().min(1),
    subPara1: z.string().min(1),
    subHeading2:z.string().min(1),
    subPara2: z.string().min(1),
    subHeading3: z.string().min(1),
    subPara3: z.string().min(1),
    video: videoSchema.refine(file => file.size > 0, "Required"),
    image: imageSchema.refine(file => file.size > 0, "Required"),
    gif: gifSchema.refine(file => file.size > 0, "Required")
})

export async function createData(formData: FormData){
    // console.log("in create")
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if(result.success === false){
        return result.error.formErrors.fieldErrors
    }
    const data = result.data;
    // console.log(data,"data")

    await fs.mkdir("public/visualContent", { recursive: true })
    const videoPath = `/visualContent/${crypto.randomUUID()}-${data.video.name}`
    await fs.writeFile(`public${videoPath}`, Buffer.from(await data.video.arrayBuffer()))
  
    await fs.mkdir("public/visualContent", { recursive: true })
    const imagePath = `/visualContent/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.image.arrayBuffer())
    )
    await fs.mkdir("public/visualContent", { recursive: true })
    const gifPath = `/visualContent/${crypto.randomUUID()}-${data.gif.name}`
    await fs.writeFile(
      `public${gifPath}`,
      Buffer.from(await data.gif.arrayBuffer())
    )

    await prisma.content.create({data:{
        mainHeading: data.mainHeading,
        subTitle1: data.subHeading1,
        subPara1: data.subPara1,
        subTitle2: data.subHeading2,
        subPara2: data.subPara2,
        subTitle3: data.subHeading3,
        subPara3: data.subPara3,
        videoPath,
        imagePath,
        gifPath,
    }})
    redirect('/admin')
    // console.log(formData)
}

export async function fetchData(){
    const allcontent = await prisma.content.findMany();
    return allcontent;
}

export async function updateData(id:string , formData: FormData){
    // console.log("idtoupdate:",id)
    // const contentId = parseInt(id);
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if(result.success === false){
        return result.error.formErrors.fieldErrors
    }
    const data = result.data;

    await prisma.content.update({where: {id} ,data:{
        mainHeading: data.mainHeading,
        subTitle1: data.subHeading1,
        subPara1: data.subPara1,
        subTitle2: data.subHeading2,
        subPara2: data.subPara2,
        subTitle3: data.subHeading3,
        subPara3: data.subPara3
    }})
    redirect('/admin')
    // console.log(formData)
}

export async function deleteData(id:string) {
    await prisma.content.delete({where: {id}})
    redirect('/admin')
}