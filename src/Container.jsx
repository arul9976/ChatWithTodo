import React, { useState } from 'react'
import { Todo } from './Todo'
import "./css/container.css"
import DateSession from './components/DateSession'
import Header from './components/Header'
import InputBar from './components/InputBar'
import axios from 'axios'
import { BackendAPI, ReduxData } from './Utils/Crud'
import { useDispatch } from 'react-redux'
import { TodoRedux } from './Redux/Store'
import { addData } from './Redux/Action'
const Container = () => {
    const [show, setShow] = useState(true);
    const { Userdata } = ReduxData();

    const [err, setErr] = useState(false);
    const dispatch = useDispatch(TodoRedux);
    const [formData, setFormData] = useState({
        username: '',
        subject: '',
        message: '',
        update: '',
        checked: false,
        TimeDate: null
    });


    const updateData = (e) => {
        let clickedElement = e.target.parentNode.parentNode.offsetParent.firstChild;
        let subjectEL = clickedElement.firstChild.textContent;
        let contentEL = clickedElement.lastChild.textContent;
        setFormData({
            subject: subjectEL,
            message: contentEL,
            update: '12'
        })
        setShow(false)
    }


    const TimeFunc = (date) => {
        let monthWord = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Ths', 'Fri', 'Sat']

        let Hours = date.getHours()
        let Minutes = date.getMinutes()
        let month = monthWord[date.getMonth()]
        let year = date.getFullYear()
        let day = Days[date.getDay()]

        console.log(year);
        let TodayDate = date.getDate()
        let AmPm = Hours >= 12 ? 'Pm' : 'Am'
        Hours = Hours % 12
        Hours = Hours ? Hours : 12
        const Add0 = (n) => {
            n = n < 10 ? '0' + n : n
            return n
        }
        Minutes = Add0(Minutes)
        TodayDate = Add0(TodayDate)
        let strTime = { date: TodayDate, day: day, month: month, year: year, hours: Hours, minutes: Minutes, ampm: AmPm }
        return strTime
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
        setErr(false)
    };

    const sendData = (e) => {
        e.preventDefault()

        if (formData.content !== '' && formData.subject !== '') {
            if (formData.update === '') {
                formData.TimeDate = TimeFunc(new Date)
                formData.username = Userdata.username;
                axios.post(`${BackendAPI}/app`, formData)
                    .then(response => {
                        console.log('Response:', response.data);
                        dispatch(addData(response.data))
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            } else {
                console.log(formData);
            }
            setFormData({
                subject: "",
                message: ""
            })
            setShow(true)
        } else {
            setErr(true)
        }

    }
    return (
        <div className="container">
            <Header />
            <div className="cardTop">
                <div className="headerBar">
                    <DateSession />
                </div>
            </div>
            <div className="cardBody">
                <Todo updateData={updateData} show={show} />
            </div>
            <InputBar show={show} setShow={setShow} err={err} subject={formData.subject} handleChange={handleChange} sendData={sendData} content={formData.message} formData={formData} />
        </div>
    )
}

export default Container