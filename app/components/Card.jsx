export default function Card({story}){
    return(
        <div className="flex flex-col w-64 max-md:w-full rounded-sm md:mx-2 my-2">
            <img src={story.img} alt="Story Image" className="object-cover h-32 rounded-t-sm" />
            <div className="border-x-2 p-2">
                <h1 className="text-xl font-semibold">{story.title}</h1>
                <p className="text-xs">{story.content}</p>
            </div>
        </div>
    )
}