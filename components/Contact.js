import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { MDBIcon } from 'mdb-react-ui-kit';
import '../styles/Contact.css';
import contact from '../components/images/Contact us-rafiki.png';
import Footer from './Footer';
import Blogs from './Blog';
import Achivements from './Achivements';
import Resume from './Resume';

function Contact() {
  const onHandleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fltk7fm', 'template_v65wlo5', e.target, 'Vsk_i2hT6bqWV2dPK')
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message sent successfully 👍',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong 🙃',
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="background">
      <center ><h1 className='m-heading'>Contact<span className='m-span'> Me</span></h1>
      <p className='p' style={{fontSize:"15px"}} >If you have any Queries, need to hire me, want my service or Hire me for job pls drop a message here! </p>
</center>

        <div className="email-box">
          <div  className='c1'>
          <img src={contact} className="contactImage" alt="Contact" />
          </div>
          <div className='c2'>
          <form onSubmit={onHandleSubmit} >
           
            <div>
              <input
                className="text"
                type="text"
                placeholder="Name"
                required
                name="from_name"
              />
            </div>

            <div>
              <input
                className="text"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>

            <div>
              <textarea
                className="text2"
                required
                name="message"
                placeholder="Message here..."
              />
            </div>

            <div>
              <button type="submit" className="btn-login">
                SUBMIT
              </button>
            </div>
           
          </form>
          </div>
        </div>
        </div>
     
        <Blogs />
       
        <Footer />
     
    </>
  );
}

export default Contact;
