import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './Reducer';

export const { fetchData, userdata } = TodoSlice.actions;
export const TodoRedux = state => state.todos;

const store = configureStore({
    reducer: {
        todos: TodoSlice.reducer
    }
});

export default store;