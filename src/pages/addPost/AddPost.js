import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../redux/postSlice/postSlice';
import { sub } from 'date-fns';
import "./AddPost.css";

const AddPost = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userName, setUserName] = useState("");

    const userList = useSelector(state => state.userSlice.userList);

    
    const ontitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserName(e.target.value);

    const canSave = Boolean(title) && Boolean(content) && Boolean(userName);

    const handleAddPost = () => {
        dispatch(addPost({
            id: Math.random(),
            userName,
            title,
            content,
            date: sub(new Date(), { minutes: 0 }).toISOString(),
            reactions: {
                like: 0,
                unLike: 0
            }
        }));
            setTitle("");
            setContent("");
            setUserName("");
            navigate(`/`);
    }

    const userOptions = userList.map(user =>
        <option
            key={user.id}
            value={user.name}
        >
            {user.name}
        </option>
    )

    return (
        <div className='form-container'>
            <h3>Title</h3>
            <input
                className='form-input'
                onChange={ontitleChange}
                placeholder="Enter title"
                value={title}
            />
            <h3>Content</h3>
            <input
                className='form-input'
                onChange={onContentChange}
                placeholder="Enter content"
                value={content}
            />
            <h3>Author</h3>
            <select
                className='user-select'
                value={userName}
                onChange={onAuthorChange}
            >
                <option value="" disabled>
                    Select Author
                </option>
                {userOptions}
            </select>
            <button
                className='add-post-button'
                onClick={handleAddPost}
                disabled={!canSave}
            >
                Add Post
            </button>
        </div>
    );
};

export default AddPost;