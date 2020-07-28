import React from "react";

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="work">
          {/* Section: Work History */}
        <section id="work" className="bg-light">
          <div className="container">
            <h2>
              Here is some of my <span className="text-primary">Work History</span>
            </h2>
            <div className="boxes">
        <img src={require('./img/resume.jpg')} alt='resume' />
            <img src={require('./img/resume2.jpg')} alt='resume2' />

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Work;
