import { Bar, BarChart, ResponsiveContainer } from 'recharts'

const data = [
    {
        name: "A",
        value: 500,
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

const TotalClicksBarChart = () => {
    return (
        <ResponsiveContainer>
            <BarChart data={data}>
                <Bar dataKey='value' fill="#8884d8" strokeWidth={5} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default TotalClicksBarChart