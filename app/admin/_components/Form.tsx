"use client"

import { FormEvent } from "react";
import { createData } from "../_actions/actions";
import { Content } from "@prisma/client";
import { updateData } from "../_actions/actions";
import Image from "next/image";

const Form = ({content}:{content?:Content | null}) => {
console.log(content,"content")

 const handleSubmit = async(event: FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  try{
    if(content != null){
      console.log("sending")
      updateData(content.id,formData);
    } else createData(formData);
  }catch(err){
    console.log("Error while sending data:",err)
  }
 
 }

  return (
    
    <div className='m-20 flex flex-col gap-5'>
        <form onSubmit={handleSubmit}>

            <div><input type="text" placeholder="main heading" required id="mainHeading" name="mainHeading" defaultValue={content?.mainHeading || ""}></input>
            {/* {error?.mainHeading && <div className="text-destructive">{error?.mainHeading}</div>} */}
            </div>

            <div><input type="text" placeholder="content for sub heading1" required id="subHeading1" name="subHeading1" defaultValue={content?.subTitle1 || ""}></input>
            {/* {error?.subHeading1 && <div className="text-destructive">{error.subHeading1}</div>} */}
            </div>

            <div><input type="text" placeholder="content for sub para1" id="subPara1" name="subPara1" defaultValue={content?.subPara1 || ""}></input>
            {/* {error?.subPara1 && <div className="text-destructive">{error.subPara1}</div>} */}
            </div>

            <div><input type="text" placeholder="content for sub heading2" required id="subHeading2" name="subHeading2" defaultValue={content?.subTitle2 || ""}></input>
            {/* {error?.subHeading2 && <div className="text-destructive">{error.subHeading2}</div>} */}
            </div>

            <div><input type="text" placeholder="content for sub para2" id="subPara2" name="subPara2" defaultValue={content?.subPara2 || ""}></input>
            {/* {error?.subPara2 && <div className="text-destructive">{error.subPara2}</div>} */}
            </div>

            <div><input type="text" placeholder="content for sub heading3" required id="subHeading3" name="subHeading3" defaultValue={content?.subTitle3 || ""}></input>
            {/* {error?.subHeading3 && <div className="text-destructive">{error?.subHeading3}</div>} */}
            </div>

            <div><input type="text" placeholder="content for sub para3" id="subPara3" name="subPara3" defaultValue={content?.subPara3 || ""}></input>
            {/* {error?.subPara3 && <div className="text-destructive">{error.subPara3}</div>} */}
            </div>

            <div><label>Choose Video</label>
            <input type="file" accept="video/*" placeholder="select video" id="video" name="video" required={content == null} ></input>
            {content != null && (
              <div>{content?.videoPath || ""}</div>
            )}</div>
<br/>
            <div><label>Choose Image</label>
            <input type="file" accept="image/*" placeholder="select image" id="image" name="image" required={content == null} ></input>
            {content != null && (
              <Image src={content?.imagePath} width={100} height={100} alt="corousel image"/>
            )}</div>
<br/>
            <div><label>Choose Gif</label>
            <input type="file" accept="image/gif,image/vnd.gif" placeholder="select gif" id="gif" name="gif" required={content == null} ></input>
            {content != null && (
              <Image src={content?.gifPath} width={100} height={100} alt="corousel gif"/>
            )}</div>
<br/>
            <div><button type='submit' className='px-2 bg-green-700'>Add</button></div>
    </form>
 
    </div>
  )
}

export default Form