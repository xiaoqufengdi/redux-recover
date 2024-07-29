import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit 支持使用 createSlice 来创建 reducers，它会自动处理 action 和 action creator 的生成。
export const counterSlice = createSlice({
    name: 'name',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: state =>{
            state.value -= 1;
        },
        incrementByAmount: (state, action)=>{
            state.value += action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;