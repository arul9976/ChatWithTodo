import React, { useState } from 'react'
import { getWeekDates } from '../Utils/GetWeekDays';
import { FetchDataFromApi } from '../Redux/Action';
import { ReduxData } from '../Utils/Crud';
import { useDispatch } from 'react-redux';
import { TodoRedux } from '../Redux/Store';

const DateSession = () => {
    const getDays = getWeekDates();

    const [Data, setData] = useState(getDays)

    const [active, setActive] = useState((Data.length - 1));
    const { Userdata } = ReduxData();
    const dispatch = useDispatch(TodoRedux)
    const fetchDatabyDate = (e) => {
        setActive(e.target.parentElement.id)
        console.log(e.target.parentElement.id);
        let month = e.target.parentElement.firstChild.id;
        let year = e.target.parentElement.lastChild.id;
        let day = e.target.parentElement.firstChild.textContent;
        let date = e.target.parentElement.lastChild.textContent;
        dispatch(FetchDataFromApi(Userdata.username, date, month, year))
    }
    return (

        Data.map((item, idx) => {
            return (
                <div className={`box ${active == idx && 'active'}`} key={idx} id={idx}>
                    <div onClick={fetchDatabyDate} className="day" id={item.date.substring(0, 3)}>
                        {item.day}
                    </div>
                    <div onClick={fetchDatabyDate} className="date" id={item.date.substring(8, 12)}>
                        {item.date.substring(4, 6)}
                    </div>
                </div>

            )
        })
    )



}

export default DateSession