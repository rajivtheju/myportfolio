import React, { Fragment } from 'react';
import rajiv from '../components/images/profile.jpg';
import '../styles/About.css';
import react from '../components/images/l-react.png';
import elearn from '../components/images/l-elearning.png';
import freelance from '../components/images/l-ux.png';
import responsive from '../components/images/li-tutorials.png';
import anlysis from '../components/images/machine-learning.png';
import realtime from '../components/images/l-project.png';
import Achivements from './Achivements';

const aboutData = [
  {
    title: "React Expertise",
    description: "Extensive experience building dynamic and responsive user interfaces.",
    img: react
  },
  {
    title: "E-Learning Entrepreneur",
    description: "I have my own e-learning platform 'Kickstart,' which is completely free for students.",
    img: elearn
  },
  {
    title: "Freelance Work",
    description: "I provide high-quality services to clients as a freelancer.",
    img: freelance
  },
  {
    title: "Responsive Design",
    description: "Skilled at creating user-friendly, cross-device compatible websites.",
    img: responsive
  },
  {
    title: "Analytical Problem-Solving",
    description: "Adept at analytical thinking and effective problem resolution.",
    img: anlysis
  },
  {
    title: "Real-Time Project Experience",
    description: "Delivered high-quality work under tight deadlines successfully.",
    img: realtime
  }
];

export default function About() {
  return (
    <Fragment>
      <div >
        <center ><h1 className='m-heading'>About</h1>
        <p className='p' style={{fontSize:"15px"}} >Expertise frontend developer with realtime Experience in live projects, want to know more please go through the further </p></center>

        <div className='self'>
          <div className='self2'>
            {aboutData.slice(0, 3).map((item, index) => (
              <div className={`l-box l-box-${index}`} key={index}>   
                <div> 
                  <img className='l-img' src={item.img} alt={item.title} />
                </div>
                <div>
                  <span className='l-head'>{item.title}</span><br />
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <div className='self1'>
            <img src={rajiv} className='self-img' alt='Profile' />
          </div>
          <div className='self2'>
            {aboutData.slice(3).map((item, index) => (
              <div className={`l-box l-box-${index + 3}`} key={index}> 
                <div> 
                  <img className='l-img' src={item.img} alt={item.title} />
                </div>
                <div>
                  <span className='l-head'>{item.title}</span><br />
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Achivements/>
      </div>
    </Fragment>
  );
}
