import MainTitle from "../MainTitle";
import "./WeeklySales.css";
import WeeklySalesPieChart from "./WeeklySalesPieChart";

const WeeklySales = () => {
    return (
        <div className="card weekly-sales md-full">
            <MainTitle text="Weekly Sales" />
            <div>
                <WeeklySalesPieChart />
            </div>
        </div>
    )
}

export default WeeklySales