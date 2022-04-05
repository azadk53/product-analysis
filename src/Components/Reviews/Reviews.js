import useReview from '../CustomHook/useReview';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css'


const Reviews = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div className='review-container'>
            {
                reviews.map(review => <ReviewDetail key={review.id} review={review}></ReviewDetail>)
            }
        </div>
    );
};

export default Reviews;