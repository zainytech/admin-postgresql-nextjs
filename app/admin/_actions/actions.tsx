"use server"

import prisma from "@/db/db";
import { redirect } from "next/navigation";

import {z} from 'zod';

const addSchema = z.object({
    mainHeading: z.string().min(1),
    subHeading1: z.string().min(1),
    subPara1: z.string().min(1),
    subHeading2:z.string().min(1),
    subPara2: z.string().min(1),
    subHeading3: z.string().min(1),
    subPara3: z.string().min(1),
})

export async function createData(formData: FormData){
    // console.log("in create")
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if(result.success === false){
        return result.error.formErrors.fieldErrors
    }
    const data = result.data;
    // console.log(data,"data")

    await prisma.content.create({data:{
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