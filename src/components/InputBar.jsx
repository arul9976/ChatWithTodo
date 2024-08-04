import React from 'react'

const InputBar = ({ show, setShow, formData, handleChange, sendData, err }) => {

    const InputBarFunc = () => {
        console.log(show);
        setShow(!show)
    }

    return (
        <div className='inputBar'>
            <div className="plus" onClick={InputBarFunc}>
                <svg className={`${!show && "show"} bi bi-plus-circle`} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
            </div>
            <form onSubmit={sendData} className={`${show && "hide"}`}>
                <input className={`${(err && formData.subject === "") && "err"}`} type="text" placeholder='Subject' name='subject' onChange={handleChange} value={formData.subject} />
                <button className="btn" type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                    </svg>
                </button>
                <textarea className={`${(err && formData.message === "") && "err"}`} name="message" rows={7} onChange={handleChange} value={formData.message} id="message" placeholder='Content'></textarea>
            </form>
        </div>
    )
}

export default InputBar