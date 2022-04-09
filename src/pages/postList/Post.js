import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TimeAgo } from '../../components';
import { likePost, unLikePost } from '../../redux/postSlice/postSlice';

import "./Post.css";

const Post = () => {
    const dispatch = useDispatch();
    const postList = useSelector(state => state.postSlice.postList)
    console.log(postList);
    const orderedPosts = postList.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className='post-container'>
            <h1>Posts</h1>
            <Link to="/add-post">
                <button className='link-add-new-post'>
                    Add new post
                </button>
            </Link>
            <Link to="/add-user">
                <button className='link-add-new-post'>
                    Add new User
                </button>
            </Link>
            {postList.length !== 0 ? orderedPosts.map((post, index) =>
                <div className='post' key={index}>
                    <h3 className='post-title'>{post.title}</h3>
                    <p className='post-content'>{post.content}</p>
                    
                    <TimeAgo timeStamp={post.date}/>
                    <footer className='post-author'>Author: {post.userName}</footer>
                    <div className='reactions'>
                        <button
                            className='reactions-button like'
                            onClick={() => dispatch(likePost(post.id))}
                        >
                            like: {post.reactions.like}
                        </button>
                        <button
                            className='reactions-button unlike'
                            onClick={() => dispatch(unLikePost(post.id))}

                        >
                            unlike: {post.reactions.unLike}
                        </button>
                    </div>
                </div>
            ) : <div className='no-post'>You haven't added a post yet</div>
            }
        </div>
    );
};

export default Post;