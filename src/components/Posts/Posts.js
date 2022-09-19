import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h3>We have {posts.length} post</h3>
            {
                posts.map(post=><Link 
                key={post.id}
                to={`/posts/${post.id}`}>{post.id}</Link>)
            }
            {/* Hear we see */}
            <Outlet></Outlet> 
        </div>
    );
};

export default Posts;