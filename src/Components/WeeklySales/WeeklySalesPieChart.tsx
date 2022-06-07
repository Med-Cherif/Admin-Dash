import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import CustomLegend from './CustomLegend';

const COLORS = ["#1495ff", "#20a417", "#ffc517", "#f52236"];

const data = [
    { name: "Direct", value: 5856 },
    { name: "Affiliate", value: 2602 },
    { name: "E-mail	", value: 1802 },
    { name: "Other", value: 1105 }
  ];

const WeeklySalesPieChart = () => {
    return (
        <ResponsiveContainer height={350}>
            <PieChart>
                <Tooltip />
                <Pie
                    startAngle={-90}
                    endAngle={360 - 90}
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    innerRadius={80}
                    outerRadius={100}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend content={CustomLegend} />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default WeeklySalesPieChart