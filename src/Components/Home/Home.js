import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../CustomHook/useReview';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReview();
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='home-info'>
                    <h1>Welcome to Our Watch Corner</h1>
                    <h1>There is No Limit to What We Can Do</h1><br />
                    <p>New to our site! explore our site and find out our latest and cheepest watch for your fashion.</p>
                    <p>All brands new collections are here</p>
                </div>
                <div>
                    <img src="/images/watch-pic.jpg" alt="" />
                </div>
            </div>
            <h2>Customer Review</h2>
            <div className='review-container'>
                {
                    reviews.slice(0, 3).map(review => <HomeReview review={review}></HomeReview>)
                }
            </div>
            <div className='btn'>
                <button onClick={() => navigate('/reviews')}>Read all Reviews</button>
            </div>

        </div>
    );
};

export default Home;