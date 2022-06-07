import "./StaticsCards.css";
import { data } from "../../data/staticsCards";

const colors = ["#1495ff", "#17a00e", "#f41127", "#ffc517"];

const StaticsCards = () => {
    return (
        <div className='statics-cards'>
            {data.map((item, index) => (
                <div key={item.id} className="card">
                    <div className="card-header" style={{ color: colors[index] }}>
                        <span className="card-header-value">{item.value}</span>
                        <item.Icon className="card-header-icon" />
                    </div>
                    <div className="card-body">
                        <span style={{ background: colors[index] }} className="card-body-progress"></span>
                    </div>
                    <div className="card-footer">
                        <span>{item.title}</span>
                        <span>+{item.increasingPercentage}%</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StaticsCards