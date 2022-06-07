import MainTitle from "../MainTitle";
import "./PageViews.css";
import PageViewsAreaChart from "./PageViewsAreaChart";

const PageViews = () => {
    return (
        <div className="card page-views md-full">
            <MainTitle text="Page Views" />
            <p className="page-views-value">14952 <span className="page-views-value-percentage">3.4% since last month</span></p>
            <div style={{ height: 200 }}>
                <PageViewsAreaChart />
            </div>
        </div>
    )
}

export default PageViews