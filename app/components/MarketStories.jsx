'use client'
import Card from "./Card"
import { story} from '../data/data'

export default function MarketStories(){
    const stories=story;
    return(
        <div className="flex flex-col mx-10 ">
            <h1 className="text-xl justify-start text-nowrap m-2 font-bold sticky top-0 max-md:hidden w-full">
                <span className=" p-2 bg-gray-100 text-red-500">MARKET STORIES</span>    
            </h1>
            {stories.map((story,index)=>(
                <li key={index} className="list-none my-1 overflow-y-auto ">
                    <Card story={story}/>
                </li>
            ))}

        </div>
    )
}