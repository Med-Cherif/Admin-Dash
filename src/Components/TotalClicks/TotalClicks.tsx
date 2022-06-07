import MainTitle from "../MainTitle"
import "./TotalClicks.css"
import TotalClicksBarChart from "./TotalClicksBarChart"

const TotalClicks = () => {
    return (
        <div className="card total-clicks md-full">
            <MainTitle text="Total Clicks" />
            <p className="page-views-value">563K <span className="page-views-value-percentage">18.41% since last month</span></p>
            <div style={{ height: 200 }}>
                <TotalClicksBarChart />
            </div>
        </div>
    )
}

export default TotalClicks