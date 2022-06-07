import MainTitle from "../MainTitle";
import "./SiteTraffic.css";
import SiteTrafficAreaChart from "./SiteTrafficAreaChart";

const SiteTraffic = () => {
    return (
        <div className="card site-traffic md-full">
            <MainTitle text="Site Traffic" />
                <div>
                    <SiteTrafficAreaChart />
                </div>
        </div>
    )
}

export default SiteTraffic