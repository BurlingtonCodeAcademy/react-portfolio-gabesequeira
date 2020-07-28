import React from "react";
import '../App.css';

class Hobbies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id='content'>
        {/* Section: Hobbies */}
        <section id="hobbies">
        <div className="hobbies-bg">
          <div className="container">
            <h2 className='heading'>
              Sometimes I <span className="text-primary">practice the organ.</span>
            </h2>
            <div className="hobbies-content">
              <div className="youtube-vid">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KR0_5h0vk-I"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title='voluntary-v-stanley'
                ></iframe>
                <p>I started playing the organ in January of 2020. Although I can play guitar, viola, and piano, at this point my favorite is organ. Here is a clip of myself practicing at the organ in Christ Church in Montpelier, VT. I hope to make this a career.</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Hobbies;
