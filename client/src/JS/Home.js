import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="content">
        <header id="showcase">
          <div className="showcase-content">
            <div className="container">
              <img src={require('./img/home-img.jpg')} alt='My face' title="Gabe" />
              <h1>
                Gabe <span className='text-primary'>Sequeira-Bacher</span>
                <br />
                Software <span className="text-primary">Developer</span>
              </h1>
              <Link to="/about" className="btn">
                TELL ME MORE
              </Link>
            </div>
          </div>
        </header>
        {/* Section: About */}
        <section id="about">
          <div className="container">
            <h2 className="heading">
              Gabe <span className="text-primary">Sequeira-Bacher</span>
            </h2>
            <div className="about-content">
              <div className="about-text">
                <h3>
                  A Little Bit More{" "}
                  <span className="text-primary">About Me</span>
                </h3>
                <p>
                  Gabe Sequeira-Bacher is a software developer who lives in Montpelier, VT. Gabe is currently enrolled in Burlington Code Academy's Software Development Bootcamp with the goal of becoming a Software Engineer.<br />

                  My Github is gabesequeira and <a href='https://github.com/gabesequeira?tab=repositories'>this is a link to my Github Repositories</a><br /> I am familiar with languages Javascript, HTML, and CSS, Frameworks NodeJS, Express, and React, as well as Database MongoDB and Version Control Git.
                </p>
                <p></p>
              </div>
              <div className="about-image">
                <img src={require("./img/about.jpg")} alt="Picture of Myself" />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Services */}
        <section id="services" className="bg-light">
          <div className="container">
            <h2>
              Here is what <span className="text-primary">I have to Offer</span>
            </h2>
            <div className="boxes">
              <div className="box">
                <h3>
                  <span className="text-primary">Awesome Modern Website</span>
                </h3>
                <div className="feature">
                  <i className="fas fa-check"></i> Modern Layout Design
                  <i className="fas fa-check"></i> Responsive Website
                  <i className="fas fa-check"></i> Search Engine
                  <i className="fas fa-check"></i> Browser Compatibility
                </div>
              </div>
              <div className="box">
                <h3>
                  <span className="text-primary">
                    Free Hosting &amp; Maintenance
                  </span>
                </h3>
                <div className="feature">
                  <i className="fas fa-check"></i> Free Domain Name
                  <i className="fas fa-check"></i> Free Hosting
                  <i className="fas fa-check"></i> Free SSL Cetificate
                  <i className="fas fa-check"></i> Browser Compatibility
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials section */}
        <section id='testimonials'>
          <div className='testimonials-bg'>
            <div className='container'>
              <h2>What my clients say <span className='text-primary'>About Me</span></h2>
              <div className='boxes'>
                <div className='box'>
                <img src={'https://picsum.photos/100/'} alt='customer1-photo' />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Similique recusandae soluta, praesentium cum nobis doloremque sunt rerum optio error iure, illum odit, dolorum obcaecati commodi!</p>
                </div>
                <div className='box'>
                <img src={'https://picsum.photos/101/'} alt='customer2-photo' />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Similique recusandae soluta, praesentium cum nobis doloremque sunt rerum optio error iure, illum odit, dolorum obcaecati commodi!</p>
                </div>
                <div className='box'>
                <img src={'https://picsum.photos/102'} alt='customer3-photo' />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Similique recusandae soluta, praesentium cum nobis doloremque sunt rerum optio error iure, illum odit, dolorum obcaecati commodi!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: contact */}
        <section id='contact' className='bg-light'>
          <div className='container'>
            <h2>Contact <span className='text-primary'>Me</span></h2>
            <div className='form-container'>
              <div className='mail-icon'><i className='fas fa-envelope'></i></div>
              <div className='form-box'>
                <h3>Shoot me a <span className='text-primary'>Message</span></h3>
                <form>
                  <div className='form-group'>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' placeholder='Enter Your First Name'></input>
                  </div>
                  <div className='form-group'>
                    <label for='last-name'>Last Name</label>
                    <input type='text' placeholder='Enter Your Last Name'></input>
                  </div>
                  <div className='form-group'>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='Enter Your Email'></input>
                  </div>
                  <div className='form-group'>
                    <label for='message'>Message</label>
                    <textarea rows='7' placeholder='Enter your message here'></textarea>
                  </div>
                  <input type='submit' value='Send Message' className='contact-btn'></input>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='bg-dark'>
          <p>Copyright &copy; Gabe Sequeira-Bacher Web Dev 2020</p>
          <div className='footer-icons'>
          <a href="https://github.com/gabesequeira?tab=repositories"><i className="fab fa-github"></i></a>
    <a href="https://www.instagram.com/gabe.sequeira.music/"><i className="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/gabe.sequeira"><i className="fab fa-facebook"></i></a>
    <a href="https://twitter.com/SequeiraGabe"><i className="fab fa-twitter"></i></a>
    <a href="https://www.linkedin.com/in/gabe-sequeira-bacher-45489b1aa/"><i className="fab fa-linkedin"></i></a>
    </div>
        </footer>

      {/* jQuery CDN */}
      <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
      </div>
    );
  }
}

export default Home;
