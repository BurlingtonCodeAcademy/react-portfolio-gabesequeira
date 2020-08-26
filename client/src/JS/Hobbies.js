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
              </div>
              <div id='paragraph'>
              <p>One of my hobbies is music. I have been playing the organ since January of 2020. I began learning Web Development in March of that year. I have a B.A. in Music from Castleton University. Here is a clip of myself practicing the organ at Christ Church in Montpelier, VT, July 2020.</p>
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
