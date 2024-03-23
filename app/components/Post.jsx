export default function Post({postData}){
    return(
        <div className="border shadow-outline hover:shadow-lg flex flex-row rounded-xl md:px-2 py-2 ">
            <div className=" flex items-start px-5 py-2">
                <img src={postData.img} alt="" className="h-10 w-16" />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-start">
                    <h1 className="text-lg font-semibold">{postData.userName}</h1>
                    <span className="bg-blue-600 mx-5 my-1 px-5 py-1 rounded-full font-semibold text-white">sector {postData.sector}</span>
                </div>
                <div className="flex items-center justify-center">
                    {postData.content}
                </div>
                <div className="flex justify-between my-2">
                    <div className="flex">
                        <img src="https://cdn-icons-png.flaticon.com/128/3641/3641323.png" alt="like_count" className="h-6 md:mx-2" />
                        <span>{postData.likeCount}</span>
                    </div>
                    <div className="flex">
                        <img src="https://cdn-icons-png.flaticon.com/128/709/709612.png" alt="view_count" className="h-6 md:mx-2" />
                        <span>  {postData.viewCount} </span>
                    </div>
                    <div className="flex">
                        <img src="https://cdn-icons-png.flaticon.com/128/9256/9256389.png" alt="comments_count" className="h-6 md:marker:mx-2" />
                        <span> {postData.commentCount}{`${postData.commentCount>1?' Comments':' Comment'}`} </span>
                    </div>
                    <div className="flex">
                        <img src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png" alt="share" className="h-6 md:mx-2" />
                        <span>share</span>
                    </div>
                </div>

            </div>
            <div className='text-xs text-blue-600 font-semibold text-nowrap mx-1 items-center '>
                {postData.time}
            </div>
        </div>
    )
}