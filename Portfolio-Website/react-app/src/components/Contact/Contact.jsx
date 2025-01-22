import React, { useRef } from 'react'
import './Contact.css'
import Walmart from '../../assets/walmart.png' 
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_stj3wcq', 'template_hb5ul9l', form.current, {
        publicKey: 'VPFYwp2n5cfUdTRl4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('email Sent!')
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <div>
      <section id="contactPage">
        <div id="clients">
          <h1 className='contactPageTitle'>My Clients</h1>
          <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem excepturi nisi quod soluta atque vitae repellendus amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, impedit.</p>
          <div className="clientImgs">
            <img src={Walmart}  alt="" className='clientImg' />
            <img src={Adobe}  alt="" className='clientImg' />
            <img src={Microsoft}  alt="" className='clientImg' />
            <img src={Facebook}  alt="" className='clientImg' />
          </div>
        </div>
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input type="text" className='name' placeholder='Your Name' name='your_name' />
            <input type="email" className='email' placeholder='Your email' name='your_email'/>
    <textarea className='msg' name="message" rows="5" placeholder='your message' ></textarea>
    <button type='submit' className="submitBtn" value='Send'>Submit</button>
    <div className="links">
        <img src={FacebookIcon} alt="" className="link" />
        <img src={TwitterIcon} alt="" className="link" />
        <img src={YouTubeIcon} alt="" className="link" />
        <img src={InstagramIcon} alt="" className="link" />

    </div>
        </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
