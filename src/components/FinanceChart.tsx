"use client";

import Image from 'next/image';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Jun',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Jul',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Aug',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Sep',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Oct',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Nov',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Dec',
        income: 1890,
        expense: 4800,
    },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt="" height={20} width={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                >
                <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tick={{ fill:"#d1d5db" }} tickLine={false} tickMargin={10}/>
                <YAxis tick={{ fill:"#d1d5db" }} axisLine={false} />
                <Tooltip />
                <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop:"10px", paddingBottom:"15px" }} />
                <Line type="monotone" dataKey="income" stroke="#42b0f5" activeDot={{ r: 8 }} strokeWidth={2}/>
                <Line type="monotone" dataKey="expense" stroke="#FAE27C" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart