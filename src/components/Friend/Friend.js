import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Friend = (props) => {
    const navigate = useNavigate()
    const {username,name,id} = props.friend
    const showFreiendDetail = () =>{
        const path =`/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h2>name is {username}</h2>
            <button onClick={showFreiendDetail}>{name}</button>
            {/* we can do the same thing by Link */}
            <Link to={`friend/${id}`}></Link>
        </div>
    );
};

export default Friend;