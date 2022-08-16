import React from 'react';
import './Contact.css'

const Contact = () => {
    

    return (
        <div className='contact-container'>
            <div className='contact-text'>
                <p id='contact-text-head'>CONTACT ME</p>
                <p id='contact-text-subhead'>I'm interested in job and freelance opportunities. However, if you have any other requests or questions, please don't hesitate to reach out:</p>
            </div>
            <div className='contact-form'>
                <form>
                    <label>NAME</label>
                    <input type='text' className='contact-name-email'></input>
                    <label>EMAIL</label>
                    <input type='text' className='contact-name-email'></input>
                    <label>MESSAGE</label>
                    <textarea className='contact-message'></textarea>
                    <button type='submit'></button>
                </form>
            </div>
        </div>
    )
}

export default Contact;