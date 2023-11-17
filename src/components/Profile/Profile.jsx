import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://th.bing.com/th/id/OIP.vkZSSbaAks6LdRTuQq-vDgHaFj?pid=ImgDet&rs=1' />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;