import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postList: []
}

export const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.postList = [...state.postList, action.payload];
        },
        likePost: (state, action) => {
            const  id  = action.payload
            const post = state.postList.find(post => id === post.id);
            post.reactions.like += 1; 
        },
        unLikePost: (state, action) => {
            const id = action.payload
            const post = state.postList.find(post => id === post.id);
            post.reactions.unLike -= 1;
        }
    }
});

export const {
    addPost,
    likePost,
    unLikePost,
} = postSlice.actions;

export default postSlice.reducer;

