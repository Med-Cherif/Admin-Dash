import { useEffect } from 'react'
import "./Circle.css"

interface IProps {
    value: number;
    color: string
}

const Circle = ({ value, color }: IProps) => {
    const radius = 30;
    const circumference = Math.PI * (radius * 2);
    const percentage = ((100 - value) / 100) * circumference;
    const length = radius * 2 + 20
    
    return (
        <div className='circle' style={{ width: length, height: length }}>
            <svg id="svg" width={length} height={length} xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
                <circle 
                    r={radius} 
                    cx={length / 2} 
                    cy={length / 2}
                    fill="transparent" 
                />
                <circle 
                    r={radius} 
                    cx={length / 2}
                    cy={length / 2}
                    strokeLinecap='round'
                    fill="transparent" 
                    strokeDasharray={circumference}
                    strokeDashoffset={percentage}
                    style={{ stroke: color }}
                />
            </svg>
            <p className="circle-value">{value}%</p>
        </div>
    )
}

export default Circle