import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams()
    const [post,setPost] = useState({});
     useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
     },[postId])
    
    return (
        <div>
            <h3>The post id is { postId}</h3>
            <h3>Title : {post.title}</h3>
            <h3>Detail : {post.body}</h3>
        </div>
    );
};

export default PostDetail;