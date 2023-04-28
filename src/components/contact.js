import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
        <div  className='contact'>
            <h1 id="contact">Contact Us</h1>
            <h2>You Can Email us at <a href='mailto:seruuice@gmail.com'>seruuice@gmail.com</a> or fill out the form</h2>
            <h3>Expect a response in 24-48 hours</h3>
            <form action="https://formsubmit.co/seruuice@gmail.com" method="POST">
                <div className='text'>Full name/Company name</div>
                <input type="text" name='name' placeholder='Name here' required/>
                <div className='text'>Service name</div>
                <input type="text" name='service' placeholder='Web/editing/Thumnail-design' required/>
                <div className='text'>Contact Number(with country code)</div>
                <input type="tel" name='contact no.' placeholder='Not mandatory' />
                <div className='text'>Email Id</div>
                <input type="email" name='email' placeholder='Your Email' />
                <div className='text'>Description(optional)</div>
                <textarea name="desc" id="desc" cols="10" rows="5"></textarea>
                <button type='submit'>Submit form</button>
            </form>
        </div>     
  )
}

export default Contact