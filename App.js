// import React, { useState, useEffect } from 'react';
// import './App.css'; // Make sure to import the CSS file
// import Intro from './components/Intro';
// import About from './components/About';
// import Services from './components/Service';
// import Achivements from './components/Achivements';
// import Skills from './components/Skills';
// import Hireme from './components/Hireme';
// import Resume from './components/Resume';
// import Project from './components/Project';
// import Work from './components/works';
// import Contact from './components/Contact';
// import Blogs from './components/Blog';

// const ScrollspyNavbar = ({ links, isNavbarVisible, toggleNavbar }) => {
//   const [activeLink, setActiveLink] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       let currentActiveLink = null;
//       let currentPosition = window.pageYOffset;

//       links.forEach(({ id, offset }) => {
//         const element = document.getElementById(id);
//         if (element) {
//           const elementPosition = element.offsetTop - offset;
//           if (currentPosition >= elementPosition && (!currentActiveLink || elementPosition > document.getElementById(currentActiveLink.id).offsetTop - offset)) {
//             currentActiveLink = { id, offset };
//           }
//         }
//       });

//       setActiveLink(currentActiveLink);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [links]);

//   return (
//     <>
//       <div className="navbar-toggle" onClick={toggleNavbar}>
//         &#9776; {/* Unicode character for hamburger menu */}
//       </div>
//       <nav className={`navbar2 ${isNavbarVisible ? 'visible' : ''}`}>
//         <ul>
//           {links.map(({ id, label }) => (
//             <li key={id} className={activeLink?.id === id ? 'active' : ''}>
//               <a href={`#${id}`} onClick={() => toggleNavbar(false)}>{label}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// };

// const App = () => {
//   const [isNavbarVisible, setIsNavbarVisible] = useState(false);

//   const toggleNavbar = () => {
//     setIsNavbarVisible(!isNavbarVisible);
//   };

//   const links = [
//     { id: 'section1', label: 'Home', offset: 0 },
//     { id: 'section2', label: 'About', offset: 50 },
//     { id: 'section3', label: 'Services', offset: 50 },
//     { id: 'section4', label: 'work', offset: 50 },
//     { id: 'section5', label: 'Contacts', offset: 50 },
//   ];

//   return (
//     <div className='mainbody'>
//       <div className='navbar' style={{boxShadow:'none'}}>
//         <div className='navbar1'>
//           <h1 className='Name'>Rajiv</h1>
//         </div>
//         <ScrollspyNavbar links={links} isNavbarVisible={isNavbarVisible} toggleNavbar={toggleNavbar} />
//       </div>
//       <section id="section1" className='bg1'>
//        <Intro/>

//         {/* Content for Section 1 */}
//       </section>

//       <section id="section2">
//         <About/>
        
//         {/* <Achivements/> */}
//       </section>

//       <section id="section3">
//       <Services/>
       
//       </section>
//       <section id="section4" >
//       <Hireme/>
//       <Resume/>
//       <Skills/>
//        {/* <Resume/> */}
//         <Work/>
//       </section>

//       <section id="section5">
//       {/* <Blogs/> */}
//       <Contact/>
//       </section>
//     </div>
//   );
// };

// export default App;





import React from 'react'
import Mainpage from './kistartcareers/Mainpage'
import { BrowserRouter } from 'react-router-dom'
import Admin from './Admin/Admin'
const App = () => {
  return (
    <div>
      <Admin/>
    </div>
  )
}
export default App
