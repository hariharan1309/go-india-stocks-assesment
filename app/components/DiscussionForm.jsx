import Post from "./Post"
import {dicussion} from '../data/data'
export default function DiscussionForm(){
    const userData=dicussion;
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl justify-start mx-10 font-bold m-2 sticky top-0 w-full  max-md:hidden">
                <span className=" p-2 bg-gray-100 text-red-500">DISSCUSSION FORUM</span>
            </h1>
            {userData.map((userdata,index)=>(
                <li key={index} className="list-none my-5 items-center md:mx-10">
                    <Post postData={userdata}/>
                </li>
            ))
            }
        </div>
    )
}