import Image from "next/image"

const Navbar = () => {
    return(
        <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] px-2 ring-gray-300">
                <Image src="/search.png" alt="" width={12} height={14} />
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
            </div>
        {/* ICONS AND USER */}
            <div className="flex items-center justify-end w-full gap-6 ">
                <div className="bg-white rounded-full  w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/message.png" alt="" width={20} height={20}/>
                </div>
                <div className="bg-white rounded-full  w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/announcement.png" alt="" width={20} height={20}/>
                    <div className="absolute text-xs leading-3 -top-3 -right-3 w-4 h-4 flex items-center justify-center bg-purple-600 rounded-full text-white">
                        1
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium pt-1">Sampanna Rimal</span>
                    <span className="text-[10px] text-gray-600 text-right">Admin</span>
                </div>
                <Image className="rounded-full" src="/avatar.png" alt="" width={36} height={36}/>

            </div>

        </div>   
    )
}
  
  export default Navbar