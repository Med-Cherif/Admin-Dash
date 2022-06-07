import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// nv => new visitors
// ov => old visitors

const data = [
    { name: "Jan", nv: 1500, ov: 800 },
    { name: "Feb", nv: 600, ov: 900 },
    { name: "Mar", nv: 3500, ov: 1200 },
    { name: "Apr", nv: 4600, ov: 2200 },
    { name: "May", nv: 5400, ov: 900 },
    { name: "Aug", nv: 8600, ov: 2000 },
    { name: "Sep", nv: 3200, ov: 1100 },
    { name: "Oct", nv: 2300, ov: 2500 },
    { name: "Nov", nv: 6100, ov: 1500 },
    { name: "Dec", nv: 7000, ov: 3000 },
]

const SiteTrafficChart = () => {
    const [test, setTest] = useState(true)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setTest(prev => !prev)
        })
    }, [])

    
    return (
        <ResponsiveContainer height={350}>
            <AreaChart 
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={40} />
                <Area name="New Visitors" type="monotone" dataKey="nv" fillOpacity={0.3} stroke="rgb(13, 202, 240)" fill="rgb(13, 202, 240)" />
                <Area name="Old Visitors" type="monotone" dataKey="ov" fillOpacity={0.8} stroke="#1495ff" fill="#1495ff" />
            </AreaChart>

        </ResponsiveContainer>
    )
}

export default SiteTrafficChart