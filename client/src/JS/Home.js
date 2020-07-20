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
      </div>
    );
  }
}

export default Home;
