import React from "react";

class Hobbies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id='content'>
        <h1>Hobbies</h1>
        <p>
          I like playing organ sometimes.<br />
          You can see me practicing here at Christ Church in Montpelier, Vermont.
          <br />
        </p>
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
                <p>When I initially went to school at Castleton I went for classical guitar, having played guitar and viola for years before that. Between high school and then I spent time in Montpelier and Burlington before going out west for a bit. In 2015 I went to Berklee college of music in Boston but had to come back in 2017 to Vermont. I was able to realize my dream of playing a piano recital at Castleton after taking 2 years' worth of lessons.</p>
                <p>I took up the organ in 2020 shortly before I got my bachelor's degree in piano performance from Castleton University. Going into music, I certainly didn't think it would make any money, and most organists will tell you it's a labor of love.</p>
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
