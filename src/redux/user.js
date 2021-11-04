import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        rooms: 0
    },
    reducers: {
        setUserEmail: (state, action) => { state.name = action.payload},
        setRoom: (state, {payload}) => state.room = payload
    }
});

export const { setUserEmail, setRoom } = userSlice.actions;

export default userSlice.reducer;