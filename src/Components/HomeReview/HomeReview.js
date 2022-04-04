import React from 'react';

const HomeReview = ({ review }) => {
    return (
        <div>
            <div className='review-row'>
                <div className='review-col'>
                    <h3>{review.name}</h3>
                    <p>{review.comment}</p>
                    <p><small>Rating: {review.rating}</small></p>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;