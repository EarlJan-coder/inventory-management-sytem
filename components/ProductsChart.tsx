"use client";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ChartData {
    week: string;
    products: number;
}

export default function ProductsChart({ data }: { data : ChartData[] }) {
    return(
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="week" stroke="#8884d8" fontSize={10} tickLine = {false} axisLine = {false}/>
                    <YAxis stroke="#8884d8" fontSize={10} tickLine = {false} axisLine = {false} allowDecimals = {false}/>
                    <Area type={'monotone'} dataKey={"products"} stroke="#8884d8" fill="#8884d8" dot = {{fill : "#884d8", r: 2}} activeDot = {{fill : "#884d8", r: 4}}/>
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', borderColor: '#f0f0f0', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                        itemStyle={{ color: '#8884d8' }}
                        labelStyle={{ fontWeight: 'semi-bold' }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
