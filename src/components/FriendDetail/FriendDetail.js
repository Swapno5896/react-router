import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let param = useParams()
    return (
        <div>
            <h2>Detail about {param.friendId} friend</h2>
        </div>
    );
};

export default FriendDetail;