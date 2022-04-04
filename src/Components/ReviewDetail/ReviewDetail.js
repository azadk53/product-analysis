import React from 'react';
import './ReviewDetail.css'

const ReviewDetail = ({ review }) => {
    return (
        <div className='review-row'>
            <div className='review-col'>
                <h3>{review.name}</h3>
                <p>{review.comment}</p>
                <p><small>Rating: {review.rating}</small></p>
            </div>
        </div>
    );
};

export default ReviewDetail;