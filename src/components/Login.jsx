import React, { useState } from 'react'
import "../css/signInUp.css"
import { isValidEmail } from '../Utils/Crud';
import { userdata, userLogin, userSignUp } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import { TodoRedux } from '../Redux/Store';
const Login = () => {
    const [loginState, setLoginState] = useState(false);

    const [err, setErr] = useState(false);
    const [serverErr, setServerErr] = useState('');

    const dispatch = useDispatch(TodoRedux)

    const [userData, setUserData] = useState({
        userName: '',
        Email: '',
        passWord: '',
    })

    const changeLoginState = () => {
        setLoginState(!loginState)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setUserData({
            ...userData,
            [name]: value,
        });
        setLoginState(loginState)
        setErr(false)
        setServerErr('')
    };

    const handleClick = async (e) => {
        e.preventDefault();

        if ((loginState && userData.userName !== '' && userData.Email !== '' && userData.passWord !== ''
            && userData.passWord.length > 7 && isValidEmail(userData.Email)) || (!loginState && userData.Email !== '' && userData.passWord !== ''
                && userData.passWord.length > 7 && isValidEmail(userData.Email))) {

            if (userData.userName.length > 0) {
                userSignUp(userData)
                console.log('signup');
            }
            else {
                await userLogin(userData).then(response => {
                    if (response.data.error) {
                        setServerErr(response.data.error)
                    } else {
                        console.log(response.data);
                        dispatch(userdata(response.data))
                    }
                }).catch(err => {
                    console.log('error');
                })

            }
        } else {
            console.log('wrong....');
            setErr(true)
        }
    }

    return (
        <div className='loginBar'>
            <form onSubmit={handleClick}>
                <div className="head">
                    <h1>Welcome</h1>
                    <h2>Have a nice Day!</h2>
                </div>

                <div className={`nameEmail ${!loginState && "active"}`}>
                    <input className={`${(loginState && userData.userName === '' && err || serverErr.length > 0) && "Error"}`} onChange={handleChange} type="text" name='userName' placeholder='userName' />
                    {/* <input className={`${(userData.userName === '' && err) && "Error"}`} onChange={handleChange} type="text" name='lastName' placeholder='Last Name' /> */}
                </div>
                <input className={`${(userData.Email === '' && err || serverErr.length > 0) && "Error"}`} onChange={handleChange} type="email" name='Email' placeholder='Email' />
                <input className={`${(userData.passWord.length < 8 && err || serverErr.length > 0) && "Error"}`} onChange={handleChange} type="password" name='passWord' placeholder='Password' />
                <button type='submit'>
                    {loginState ? "Sign Up" : "Login"}
                </button>

                <p className='serverErr'>{serverErr}</p>

                <p>
                    {!loginState ? "New User" : "Already have an account? "}
                    <span onClick={changeLoginState}>{loginState ? " Login " : " SignUp "}</span>
                </p>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,128L48,154.7C96,181,192,235,288,213.3C384,192,480,96,576,48C672,0,768,0,864,5.3C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default Login