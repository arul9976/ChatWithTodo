import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { TodoRedux } from "../Redux/Store"
import { userdata } from "../Redux/Action"

const Crud = () => {

}

export const BackendAPI = 'https://todoappbackend-10085207710.development.catalystappsail.com' //'http://localhost:4000';



export const fetchData = async () => {
    await axios.get(`${BackendAPI}/app/Arul`).then(res => {
        return res.data
    })
}

export const ReduxData = () => {
    const DataTodos = useSelector(TodoRedux);

    const { isLogged, TodoDatas, loading, Userdata } = DataTodos;
    return { isLogged, TodoDatas, loading, Userdata };
}

export const isValidEmail = (email) => {
    const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegax.test(email)
}


export default Crud