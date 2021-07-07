import React from "react";
import "../App.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        {/* Footer */}
        <footer className="bg-dark">
          <p>Copyright &copy; Gabe Sequeira-Bacher Web Development 2020</p>
          <div className="footer-icons">
            <a href="https://github.com/gabesequeira?tab=repositories">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/gabe.sequeira.music/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/gabe.sequeira">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/SequeiraGabe">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/gabe-sequeira-bacher-45489b1aa/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
