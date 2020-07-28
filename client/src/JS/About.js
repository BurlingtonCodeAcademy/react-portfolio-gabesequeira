import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <>
       {/* Section: About */}
       <section id="about">
       <div className="container">
         <h2 className="heading">
           Gabe <span className="text-primary">Sequeira-Bacher</span>
         </h2>
         <div className="about-content">
           <div className="about-text">
             <h3>
               A Little Bit More {" "}
               <span className="text-primary">About Me</span>
             </h3>
             <p>
               Gabe Sequeira-Bacher is a software developer who lives in Montpelier, VT. Gabe is a student in the fourth cohort of Burlington Code Academy's Software Development Bootcamp. Afterwards, he hopes to become a full-stack developer.<br />
               My Github is gabesequeira and <a href='https://github.com/gabesequeira?tab=repositories'>this is a link to my Github Repositories</a><br /> I am familiar with languages Javascript, HTML, and CSS, Frameworks NodeJS, Express, and React, as well as Database MongoDB and Version Control Git.
             </p>
             <p></p>
           </div>
           <div className="about-image">
           <img src={require('./img/about.jpg')} alt='My face' title="Gabe" />
           </div>
         </div>
       </div>
     </section>
     </>
        )
    }
}

export default About;