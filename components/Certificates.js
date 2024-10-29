import React from 'react';
import { Fragment } from 'react';

import '../styles/internship.css'
const certificates = [
  {
    id: 1,
   
    title: 'Frontend Technologies',
    description: 'I have completed the Frontend Technologies certification from Free Code Camp, which has equipped me with essential skills for creating responsive and dynamic web interfaces.',
  },
  {
    id: 2,
  
    title: 'Responsive web design',
    description:'I had done a course on responsive web development in free codecamp in this one gained knowledge on designing real time webpages with dynamic behaviour ',
  },
  {
    id: 3,
    title: 'Web Development Certification',
    description: 'I hold a Web Development Certification from Engineercore, demonstrating my expertise in building robust and scalable web applications.',
  },
  {
    id: 4,
   
    title: 'Basics of SQL',
    description: 'I have a solid understanding of database management, supported by my Basics of SQL certification from Bodhasoft.',
  },
  {
    id: 5,
  
    title: 'IOT Certification',
    description: 'My interest in the Internet of Things is certified by NPTEL, where I earned my IOT Certification, learning about the integration and application of IoT devices.',
  },
  {
    id: 6,
    title: 'React JS Certifications',
    description: 'I am also certified in React JS from Tutorials Point, enabling me to develop highly interactive and user-friendly web applications.',
  },
  {
    id: 7,
  
    title: 'Python Programming',
    description: 'My proficiency in Python is backed by a certification in Python Programming from CodeTantra, where I honed my skills in writing efficient and effective code.',
  },
];

const Certificate = () => {
  return (
    <Fragment>
      <div className='p-container'>
        {certificates.map((certificate) => (
          <div key={certificate.id} className='p-box'>
            <h3 className='p-h3'
             style={{height:'50px',
              alignContent:'center',
              alignItems:'center'
          
            }}>{certificate.title}</h3>
            <hr></hr>
            <p className='p-p'>{certificate.description}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Certificate;