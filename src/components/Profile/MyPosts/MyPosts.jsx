import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", like: 4},
        {id: 2, message: "It's my first post!", like: 20},

]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
                <button>Post Remove</button>
            </div>

            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].like}/>
                <Post message={postData[1].message} likesCount={postData[1].like}/>
            </div>
        </div>


    );
}

export default MyPosts;