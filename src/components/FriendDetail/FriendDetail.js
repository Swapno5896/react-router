import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId}  = useParams()
    const [ friend,setFreind]= useState({})
    const {name,email,address} = friend
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFreind(data))
    },[])
    return (
        <div>
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            <h2>Detail about {friendId} friend</h2>
            <small>Address : {address?.city}</small>

        </div>
    );
};

export default FriendDetail;