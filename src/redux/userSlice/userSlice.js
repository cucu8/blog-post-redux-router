import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [
        { id: "1", name: "Cuneyt", surName: "Donmez" },
        { id: "2", name: "Alex", surName: "DeSouza" },
        { id: "3", name: "Irfancan", surName: "Kahveci"},
    ]
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userList = [...state.userList, action.payload]
        }
    }
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer 