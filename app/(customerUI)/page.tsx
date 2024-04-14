import prisma from "@/db/db"
import { fetchData } from "../admin/_actions/actions"
import EmblaCarousel from './Carousel/EmblaCarousel'
import drawing from  '../../public/drawing.png'
import next from  '../../public/next.svg'


const HomePage = async() => {
    const contentFirst = await prisma.content.findFirst({});

    const OPTIONS = {}
    const SLIDE_COUNT = 3
    const SLIDES = [drawing,next,drawing]
    

  return (

    <>
    <nav>
        <ul className='flex gap-5 justify-center m-10'>
            <li>Home</li>
            <li>Team</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    <section className="flex gap-4 mx-10 ">
    <section className='mt-20  w-1/2'>
        <h1 className='text-gray-400 text-sm font-semibold'>HELLO WORLD</h1>
        <p className="text-2xl font-bold my-5">{contentFirst?.mainHeading}</p>
        <button className="bg-orange-600 text-white text-xs px-4 p-2">Explore Our Portfolio!</button>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10">
            <div className="border-t-2 border-red-600 bg-slate-200 p-2">
                <h1 className="font-bold text-xl">{contentFirst?.subTitle1}</h1>
                <p className="text-sm text-gray-500">{contentFirst?.subPara1}</p>
            </div>
            <div className="border-t-2 sm:mt-5 border-blue-600 bg-slate-200 p-2">
                <h1 className="font-bold text-xl">{contentFirst?.subTitle2}</h1>
                <p className="text-sm text-gray-500">{contentFirst?.subPara2}</p>
            </div>
            <div className="border-t-2 border-green-600 bg-slate-200 p-2">
                <h1 className="font-bold text-xl">{contentFirst?.subTitle3}</h1>
                <p className="text-sm text-gray-500">{contentFirst?.subPara3}</p>
            </div>
        </div>
    </section>
    <section className="w-1/2 h-auto">
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />

    </section>
    </section>


    </>
  )
}

export default HomePage