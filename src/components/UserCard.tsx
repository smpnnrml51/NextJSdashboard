import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
    return(
        <div className="rounded-2xl odd:bg-watery even:bg-yellowish p-4 flex-1 min-2-[130px]">
            <div className="flex justify-between items-center ">
                <span className="text-[10px] bg-white p-2 p  rounded-full text-green-600 ">2024/25</span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">1,234</h1>
            <h2 className="capitalize text-sm font-medium text-greyish">{type}</h2>
        </div>
    )
}

export default UserCard