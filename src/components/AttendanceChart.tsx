"use client";

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sunday',
    present: 30,
    absent: 23,
  },
  {
    name: 'Monday',
    present: 46,
    absent: 15,
  },
  {
    name: 'Tuesday',
    present: 44,
    absent: 10,
  },
  {
    name: 'Wednesday',
    present: 23,
    absent: 41,
  },
  {
    name: 'Thursday',
    present: 34,
    absent: 65,
  },
  {
    name: 'Friday',
    present: 33,
    absent: 11,
  },
];


const AttendanceChart = () =>{
    return(
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" height={20} width={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tick={{ fill:"#d1d5db" }} tickLine={false}/>
                <YAxis axisLine={false} tick={{ fill:"#d1d5db" }} />
                <Tooltip contentStyle={{ borderRadius:"10px", borderColor:"lightgray" }} />
                <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop:"20px", paddingBottom:"25px" }} />
                <Bar dataKey="present" fill="#42b0f5" legendType='circle' radius={[7,7,0,0]} />
                <Bar dataKey="absent" fill="#FAE27C" legendType='circle' radius={[7,7,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart