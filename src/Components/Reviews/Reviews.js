import useReview from '../CustomHook/useReview';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css'


const Reviews = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div className='reviews'>
            <h2>What Our Customers Say</h2>
            <div className='review-container'>

                {
                    reviews.map(review => <ReviewDetail key={review.id} review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default Reviews;