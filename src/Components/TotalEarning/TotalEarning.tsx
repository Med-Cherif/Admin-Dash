import MainTitle from "../MainTitle";
import "./TotalEarning.css";
import TotalEarningBarChart from "./TotalEarningBarChart";

const TotalEarning = () => {
    return (
        <div className="card total-earning md-full">
            <MainTitle text="Total Earning" />
            <p className="page-views-value">$134.271 <span className="page-views-value-percentage">7.41% since last month</span></p>
            <hr style={{ margin: '20px 0px' }} />
            <MainTitle text="Total Sales" />
            <p className="page-views-value">$279.546 <span className="page-views-value-percentage">11.75% since last month</span></p>

            <div style={{ height: 250 }}>
                <TotalEarningBarChart />
            </div>
        </div>
    )
}

export default TotalEarning