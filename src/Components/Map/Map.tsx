import "./Map.css";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { useGlobalState } from "../../Provider/AppProvider";

const data = [
    { flag: require('../../Assets/flag.webp'), name: 'Algeria', income: 3195 },
    { flag: require('../../Assets/flag.webp'), name: 'Algeria', income: 3195 },
    { flag: require('../../Assets/flag.webp'), name: 'Algeria', income: 3195 },
    { flag: require('../../Assets/flag.webp'), name: 'Algeria', income: 3195 },
]

const Map = () => {

    const { darkMode } = useGlobalState()

    const bgColor = darkMode ? "#171717" : "#fff";
    
    return (
        <div className='card map md-full'>
            <div style={{ minHeight: 300, flex: 1 }}>
                <VectorMap 
                    map={worldMill}
                    backgroundColor={bgColor}
                    regionStyle={{
                    initial: {
                        fill: "#128da7"
                    },
                    hover: {
                        fill: "#A0D1DC"
                    }
                    }}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="country-data">
                                <img src={item.flag} alt={item.name} className="flag" />
                                <span>{item.name}</span>
                            </td>
                            <td>{item.income}$</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Map