import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='review-container'>
            {
                reviews.map(review => <ReviewDetail key={review.id} review={review}></ReviewDetail>)
            }
        </div>
    );
};

export default Reviews;