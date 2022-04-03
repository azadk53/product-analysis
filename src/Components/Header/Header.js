import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav-container'>
                <Link to='/' className='nav'>Home</Link>
                <Link to='/reviews' className='nav'>Reviews</Link>
                <Link to='/blogs' className='nav'>Blogs</Link>
                <Link to='/dashboard' className='nav'>DashBoard</Link>
                <Link to='/about' className='nav'>About</Link>
            </nav>
        </div>
    );
};

export default Header;