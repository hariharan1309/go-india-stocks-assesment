export default function NavBar({isVisible=false}){
    return(
        <div className={` ${isVisible?'relative': 'hidden'} bg-blue-800 font-semibold text-white px-5 py-3 items-center h-full`}>
            <div className="flex flex-row *:mx-2 *:my-4 p-1  hover:bg-blue-900 items-center">
                <img src="/assets/profile_about_mobile ui_user_icon.png" alt="notofication" className="h-6"/>
                <span> Hello, User</span>
                <img src="/assets/notification_new_icon.png" alt="notofication" className="h-6" />
            </div>
            <hr />
            <div className="flex flex-col justify-between *:px-2 *:py-3 ">
                <div className="flex flex-row *:mx-1.5 hover:bg-blue-900  ">
                    <img src="/assets/message.png" alt="" className="h-6 w-6"/>
                    <span>
                        Discussion Forum
                    </span> 
                    <img src="/assets/dropdown.png" alt="" className="h-4"/>
                </div>
                <div className="flex flex-row *:mx-1.5 hover:bg-blue-900">
                    <img src="/assets/dollar.png" alt="" className="h-6 w-6" />
                        <span> Market Stories</span>
                </div>
                <div className="mx-10 hover:bg-blue-900">
                    <span>Sentiment</span>
                </div>
                <div className="mx-10 hover:bg-blue-900">
                    <span>Market</span>
                </div>
                <div className="mx-10 hover:bg-blue-900">
                    <span>Sector</span>
                </div>
                <div className="mx-10 hover:bg-blue-900">
                    <span>Watchlist</span>
                </div>
                <div className="mx-10 hover:bg-blue-900">
                    <span className="h">Events</span>
                </div>
                <div className="mx-10 hover:bg-blue-900">
                    <span>News/Interviews</span>
                </div>

            </div>
        </div>
    )
}