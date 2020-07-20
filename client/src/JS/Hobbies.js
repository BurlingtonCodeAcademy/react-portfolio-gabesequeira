import React from "react";

class Hobbies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id='content'>
        <section id="testimonials">
        <div className="testimonials-bg">
          <div className="container">
            <h2>
              Sometimes I <span className="primary">practice the organ.</span>
            </h2>
            <div className="boxes">
              <div className="box">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KR0_5h0vk-I"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>I'm also an organist. Here are some YouTube clips of me practicing organ at Montpelier's Christ Church in July 2020. It's a labor of love.</p>
                <p></p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lMRAgsVOFM0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
