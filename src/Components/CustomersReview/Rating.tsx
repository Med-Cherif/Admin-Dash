import { FaStar, FaStarHalfAlt } from 'react-icons/fa'


const Rating = ({ rating }: { rating: number }) => {
    function displayRating() {
        const rest = rating % 1;
        const exact = Math.floor(rating);

        if (rest === 0) {
            return [...new Array(5).fill(0)].map((_, i) => {
                if (i < rating)  {
                    return <FaStar key={i} className='star-icon filled' />
                }
                return <FaStar key={i} className='star-icon' />
            })
        }


        return [...new Array(5).fill(0)].map((_, i) => {
            if (i < exact)  {
                return <FaStar key={i} className='star-icon filled' />
            }
            if (i === exact && rating > i) {
                return <FaStarHalfAlt key={i} className='star-icon filled' />
            }

            return <FaStar key={i} className='star-icon' />
        })



    }
    return (
        <div className='rating'>
            {displayRating()}
        </div>
    )
}

export default Rating