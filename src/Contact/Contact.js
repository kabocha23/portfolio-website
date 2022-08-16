import React from 'react';
import './Contact.css'

const Contact = () => {
    

    return (
        <div className='contact-container'>
            <div className='contact-text'>
                <p>CONTACT</p>
            </div>
            <div className='contact-form'>
                <form>
                    <label>NAME</label>
                    <input type='text'></input>
                    <label>EMAIL</label>
                    <input type='text'></input>
                    <label>MESSAGE</label>
                    <input type='text'></input>
                </form>
            </div>

        </div>
    )
}

export default Contact;