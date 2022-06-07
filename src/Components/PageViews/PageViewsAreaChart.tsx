import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "A",
        value: 0,
    },
    {
        name: "B",
        value: 1200,
    },
    {
        name: "C",
        value: 800,
    },

    {
        name: "D",
        value: 2600,
    },

    {
        name: "E",
        value: 1800,
    },

    {
        name: "F",
        value: 4000,
    },

    {
        name: "G",
        value: 1000,
    },

    {
        name: "H",
        value: 1700,
    },
]

const PageViewsAreaChart = () => {
    return (
        <ResponsiveContainer>
            <AreaChart data={data}>
                <Area 
                    strokeWidth={4}
                    type="monotone" 
                    dataKey="value"
                    stroke="#8884d8" 
                    fill="#8884d8"  
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default PageViewsAreaChart