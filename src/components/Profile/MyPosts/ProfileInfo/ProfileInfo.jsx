import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://th.bing.com/th/id/OIP.vkZSSbaAks6LdRTuQq-vDgHaFj?pid=ImgDet&rs=1' />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;