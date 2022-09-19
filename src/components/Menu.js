import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink/CustomLink';

const Menu = () => {
    return (
        <div>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
        </div>
    );
};

export default Menu;