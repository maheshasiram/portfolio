import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { RiWhatsappLine } from 'react-icons/ri';


function Contact(props) {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>maheshasiram@gmail.com</h5>
                        <a href='mailto:maheshasiram@gmail.com'>Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerLine className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>egatutorials</h5>
                        <a href='https://www.facebook.com/profile.php?id=100074079693603' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <RiWhatsappLine className='contact_option-icon'/>
                        <h4>Whats App</h4>
                        <h5>9000094872</h5>
                        <a href="https://api.whatsapp.com/send?phone=9000094872" target='_blank'>Send a message</a>
                    </article>
                </div>
                <form action=''>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;