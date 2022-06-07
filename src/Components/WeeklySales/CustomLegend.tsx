import React from 'react'
import { DefaultLegendContent } from 'recharts/types/component/DefaultLegendContent'

const getPercentage = (number: number) => {
    const fullNumber = 11365
    return Math.round(number * 100 / fullNumber)
}

const CustomLegend = ({ payload }: any) => {


    // fullNumber => 100%
    // number     => x

    // x = number * 100 / fullnumber
    

    return (
        <ul className='custom-legend-list'>
            {(payload as any[]).map(({ payload }, index) => (
                <li key={index} className="custom-legend-item">
                    <div className='custom-legend-left'>
                        <span className="custom-legend-color" style={{ background: payload.fill }} />
                        <span className='custom-legend-name'>{payload.name}</span>
                    </div>
                    <span className='custom-legend-value'>${payload.value}</span>
                    <span className='custom-legend-percentage'>{getPercentage(payload.value)}%</span>
                </li>
            ))}
        </ul>
    )
}

export default CustomLegend