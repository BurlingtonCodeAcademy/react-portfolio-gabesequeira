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
        <section id="services" className="bg-light">
          <div className="container">
            <h2>
              Here is some of my <span className="text-primary">Work History</span>
            </h2>
            <div className="boxes">
        <img src={require('./img/Resume1.png')} />
            <img src={require('./img/Resume2.png')} />

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Work;
