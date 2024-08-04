import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BackendAPI } from '../Utils/Crud';

const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        isLogged: false,
        TodoDatas: [],
        loading: null,
        Userdata: {
            username: '',
            email: '',
        }
    },
    reducers: {
        fetchData: (state, action) => {
            state.TodoDatas = []
            state.TodoDatas = action.payload;
        },
        userdata: (state, action) => {
            state.isLogged = true;

            console.log(action.payload[0].Username);
            state.Userdata.username = action.payload[0].Username;
            state.Userdata.email = action.payload[0].Email;
            localStorage.setItem('token', JSON.stringify(action.payload[0]))
        },
        addData: (state, action) => {
            state.TodoDatas.push(action.payload)
        },
        checkData: (state, action) => {
            let checkData = state.TodoDatas.filter(data => data._id === action.payload.id);
            axios.get(`${BackendAPI}/app/check/${action.payload.username}/${action.payload.id}`)
            checkData[0].checked = !checkData[0].checked
        },
        removeData: (state, action) => {
            let deleingData = state.TodoDatas.filter(note => note._id === action.payload)
            console.log(deleingData);
            state.TodoDatas = state.TodoDatas.filter(note => note._id !== action.payload)
            axios.delete(`${BackendAPI}/app/${action.payload}/${deleingData[0].username}`)

        }
    }
});
export default TodoSlice;