import Image from "next/image"

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-whitish rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Hello World</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            6-16-2024
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">this is Sampanna's Dashboard</p>
                </div>
                <div className="bg-whitish rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Hello World</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            6-16-2024
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">this is Sampanna's Dashboard</p>
                </div>
                <div className="bg-whitish rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Hello World</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            6-16-2024
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">this is Sampanna's Dashboard</p>
                </div>


            </div>
        </div>
    )
}

export default Announcements