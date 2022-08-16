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
                    <input type='text' className='contact-name-email'></input>
                    <label>EMAIL</label>
                    <input type='text' className='contact-name-email'></input>
                    <label>MESSAGE</label>
                    <textarea className='contact-message'></textarea>
                </form>
            </div>

        </div>
    )
}

export default Contact;