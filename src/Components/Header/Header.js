import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'

        }
    }
    return (
        <div>
            <nav className='nav-container'>
                <NavLink style={navLinkStyle} to='/' className='nav'>Home</NavLink>
                <NavLink style={navLinkStyle} to='/reviews' className='nav'>Reviews</NavLink>
                <NavLink style={navLinkStyle} to='/blogs' className='nav'>Blogs</NavLink>
                <NavLink style={navLinkStyle} to='/dashboard' className='nav'>DashBoard</NavLink>
                <NavLink style={navLinkStyle} to='/about' className='nav'>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;