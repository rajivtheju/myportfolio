import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../styles/Blog.css';
import blog1 from './images/b1.png'
import blog2 from './images/b2.png'
import blog3 from './images/b3.png'
const blogsData = [
  {
    title: "Kickstart an e-learning Platform",
    description: " This Blog is about my own e learning platform kickstart",
    img: blog1,
    link: "https://rajiv145.hashnode.dev/kickstart-strat-learning-from-scracth"
  },
  {
    title: "Realtime database in Firebase",
    description: " Accessesing the real time database from google firebase ",
    img: blog2,
    link: "https://rajiv145.hashnode.dev/how-to-use-realtime-database-in-firebase"
  },
  {
    title: "Integrating MDB Bootstrap ",
    description: "How to install mdb bootstrap in our project and accses components",
    img: blog3,
    link: "https://rajiv145.hashnode.dev/styling-react-components-with-mdbootstrap"
  },
  
];

const Blogs = () => {
  return (
    <>
    <MDBContainer className="py-5">
       <center ><h1 className='m-heading'>My<span className='m-span'> Blogs</span></h1>
      <p className='p' style={{fontSize:"15px"}} >Check out my latest blogs from hashnode </p>
</center>

      <MDBRow>
        {blogsData.map((blog, index) => (
          <MDBCol md="6" lg="4" key={index} className="mb-4">
            <MDBCard>
              <MDBCardImage src={blog.img} position="top" alt={blog.title} />
              <MDBCardBody>
                <MDBCardTitle>{blog.title}</MDBCardTitle>
                <MDBCardText>{blog.description}</MDBCardText>
                <MDBBtn href={blog.link} color="primary" size="sm">Read more</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      <a href='https://hashnode.com/@rajiv145' 
      style={{fontSize:"25px",
        color:"darkBlue",
        textDecoration:"underLine"

      }}
      
      >read more</a>
    </MDBContainer>
    </>
  );
};

export default Blogs;
