import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BackendAPI } from "../Utils/Crud";


export const fetchData = createAction('todos/fetchData', (data) => ({
    payload: data
}))

export const userdata = createAction('todos/userdata', (data) => ({
    payload: data
}))

export const addData = createAction('todos/addData', (data) => ({
    payload: data
}))

export const checkData = createAction('todos/checkData', (data) => ({
    payload: data
}))

export const removeData = createAction('todos/removeData')


export const FetchDataFromApi = (username, day, month, year) => {

    return async (dispatch) => {
        let url = `${BackendAPI}/app/${username}/${day}/${month}/${year}`;
        await axios.get(url)
            .then(res => {
                dispatch(fetchData(res.data))
            })
            .catch(err => {
                console.log("err fecthing data");
            })
    }
}

export const userLogin = async (userData) => {
    return await axios.post(`${BackendAPI}/app/Login`, userData);
}

export const userSignUp = async (userData) => {
    await axios.post(`${BackendAPI}/app/SignUp`, userData)
        .then(res => {
            console.log(res);
            return res;

        }).catch(err => {
            console.log(err);
        })
}


export const tokenLogin = async (tokenData) => {

    return await axios.post(`${BackendAPI}/app/token`, tokenData)
}