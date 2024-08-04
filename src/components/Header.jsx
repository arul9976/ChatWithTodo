import React from 'react'
import { ReduxData } from '../Utils/Crud'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { Userdata } = ReduxData();
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/Login')
    }
    return (
        <div className='header'>
            <div className="logo" onClick={logOut}>
                Logo
            </div>
            <div className="feeds">
                FEEDS
            </div>
            <div className="Profile">
                <div className="img">

                </div>
                <p className="name">
                    {
                        Userdata.username
                    }
                </p>
            </div>
        </div>
    )
}

export default Header