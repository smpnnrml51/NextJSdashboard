'use client';
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Toggle',
        count: 75,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 22,
        fill: '#42b0f5',
    },
];

const CountChart = () => {
    return (
        <div className='bg-white rouded-xl w-full h-full p-4'>

            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>


            {/* CHART */}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            // label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                        {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>


            {/* FOOTER */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-yellowish rounded-full">
                        <h1 className="font-bold pt-5">1,234</h1>
                        <h2 className="text-xs text-greyish">Girls (55%)</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-watery rounded-full">
                        <h1 className="font-bold pt-5">1,234</h1>
                        <h2 className="text-xs text-greyish">Boys (45%)</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CountChart