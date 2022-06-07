import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis
  } from "recharts";
  
  const data = [
    {
      label: "one",
      count: 1
    },
    {
      label: "two",
      count: 2
    },
    {
      label: "three",
      count: 3
    },
    {
      label: "four",
      count: 4
    },
    {
      label: "five",
      count: 5
    },
    {
      label: "six",
      count: 6
    }
  ];
  
  export default function Test() {
    return (
      <div className="nothing">
        <h1>Hello CodeSandbox</h1>
        <div
          style={{
            width: "100%",
            padding: "30px",
            maxWidth: "1000px",
            margin: "20px auto"
          }}
        >
          <ResponsiveContainer height={300}>
            <LineChart data={data}>
              <CartesianGrid />
              <Line type="monotone" dataKey="count" />
              <YAxis axisLine={false} tickLine={false} dataKey="count" />
              <XAxis axisLine={false} tickLine={false} dataKey="label" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  