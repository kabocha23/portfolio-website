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
                    <div className='contact-name-email'>
                        <div className='contact-name'>
                            <label id='contact-name-label'>NAME</label>
                            <input type='text' name='name' id='contact-name-input'></input>
                        </div>
                        <div className='contact-email'>
                            <label id='contact-email-label'>EMAIL</label> 
                            <input type='email' name='email' id='contact-email-input'></input>                              
                        </div>
                    </div>
                    <label>MESSAGE</label>
                    <textarea id='contact-message'></textarea>
                    <button type='submit' id='contact-submit'>Send Message!</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;