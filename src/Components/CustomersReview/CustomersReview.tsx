import "./CustomersReview.css";
import MainTitle from "../MainTitle";
import ReviewItem from "./ReviewItem";

const image = require('../../Assets/profile.jpeg')

const data = [
    { image, name: 'Mohamed Cherif', product: 'IPhone 13', time: '08:34 AM', comment: 'This is svery Nice phone in low budget', rating: 4.5 },
    { image, name: 'Mohamed Cherif', product: 'IPhone 13', time: '08:34 AM', comment: 'This is svery Nice phone in low budget', rating: 3.5 },
    { image, name: 'Mohamed Cherif', product: 'IPhone 13', time: '08:34 AM', comment: 'This is svery Nice phone in low budget', rating: 2.5 },
    { image, name: 'Mohamed Cherif', product: 'IPhone 13', time: '08:34 AM', comment: 'This is svery Nice phone in low budget', rating: 1.5 },
    { image, name: 'Mohamed Cherif', product: 'IPhone 13', time: '08:34 AM', comment: 'This is svery Nice phone in low budget', rating: 0.5 },
].map((item, i) => ({ ...item, id: i + 1 }));

const CustomersReview = () => {
    return (
        <div className="card customers-review md-full">
            <MainTitle text="Customers Review" />
            <div className="reviews-list">
                {data.map((review) => (
                    <ReviewItem key={review.id} {...review} />
                ))}
            </div>
        </div>
    )
}

export default CustomersReview