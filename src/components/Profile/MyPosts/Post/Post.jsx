import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    //  console.log(props.message);
    // debugger;

    return (<div className={s.item}>
        <img src='https://i.pinimg.com/736x/f3/b4/13/f3b413b3ed22471449b8c89bf5418289.jpg'></img>
        {props.message}

        <div>
            <span>like {props.like}</span>
        </div>
    </div>

    );
}

export default Post;