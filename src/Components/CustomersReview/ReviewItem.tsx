import Rating from "./Rating"

interface IProps {
    image: string
    name: string
    product: string
    time: string
    comment: string
    rating: number
}

const ReviewItem = (props: IProps) => {
    return (
        <div className="review-item">
            <div className="review-item-left">
                <img src={props.image} alt="" className="avatar" />
                <div>
                    <h4 className="product-name__time">{props.product} <span className="time">{props.time}</span></h4>
                    <p className="username__comment">{props.name} : {props.comment}</p>
                </div>
            </div>

            <Rating rating={props.rating} />

        </div>
    )
}

export default ReviewItem