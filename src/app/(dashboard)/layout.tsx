import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image";
import Link from "next/link";
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return <div className="h-screen flex">


    {/*LEFT*/}
        <div className="w-[12%] md:w[5%] lg:w[13%] xl:w-[11%] p-4">
            <Link href="/" className="flex items-center justify-center gap-2">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <span className="hidden lg:block font-bold">SCDashboard</span>
            </Link>    
            <Menu/>
        </div>
    {/*RIGHT*/}
        <div className="w-[88%] md:w[95%] lg:w[87%] xl:w-[89%] bg-whitish overflow-scroll flex flex-col"> 
            <Navbar />
            {children}
            </div>
        </div>
}