
import './Main.css'
import PageViews from './PageViews'
import SiteTraffic from './SiteTraffic'
import SocialMediaStatics from './SocialMediaStatics'
import StaticsCards from './StaticsCards'
import TotalClicks from './TotalClicks'
import WeeklySales from './WeeklySales'
import Storage from './Storage'
import Map from './Map'
import TotalEarning from './TotalEarning'
import CustomersReview from './CustomersReview'
import OrdersSummary from './OrdersSummary'

const Main = () => {
    return (
        <div className='main'>
            <StaticsCards />
            <div className='main-wrapper'>
                <SiteTraffic />
                <WeeklySales />
                <SocialMediaStatics />
                <Map />
                <PageViews />
                <TotalClicks />
                <Storage />
                <TotalEarning />
                <CustomersReview />
                <OrdersSummary />

            </div>
        </div>
    )
}

export default Main