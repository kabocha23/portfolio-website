import React from 'react';
import paperPlane from '../../Static/img/paper-plane.svg';
import './Contact.css'

const Contact = ({ mailerState, handleEmailStateChange, sendEmail, formRef }) => {
    

    return (
        <div className='contact-container'>
            <div className='contact-text'>
                <p id='contact-text-head'>CONTACT ME</p>
                <p id='contact-text-subhead'>I'm interested in job and freelance opportunities. However, if you have any other requests or questions please don't hesitate to reach out:</p>
            </div>
            <div className='contact-form'>
                <form ref={formRef} onSubmit={sendEmail}>
                    <div className='contact-name-email'>
                        <div className='contact-name'>
                            <label id='contact-name-label'>NAME</label>
                            <input 
                                type='text' 
                                name='name' 
                                id='contact-name-input'
                                value={mailerState.name}
                                onChange={handleEmailStateChange}
                            ></input>
                        </div>
                        <div className='contact-email'>
                            <label id='contact-email-label'>EMAIL</label> 
                            <input 
                                type='email' 
                                name='email' 
                                id='contact-email-input'
                                value={mailerState.email}
                                onChange={handleEmailStateChange}
                            ></input>                              
                        </div>
                    </div>
                    <label>MESSAGE</label>
                    <textarea 
                        id='contact-message'
                        name='message'
                        value={mailerState.message} 
                        onChange={handleEmailStateChange}
                    ></textarea>
                    <button 
                        type='submit' 
                        id='contact-submit'
                    >Send Message!<img src={paperPlane} id='paper-plane' alt='paper-plane'></img></button>
                </form>
            </div>
        </div>
    )
}

export default Contact;