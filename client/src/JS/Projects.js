import React from "react";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id='content'>
              {/* Projects section */}
              <section id='projects'>
              <div className='projects-bg'>
                <div className='container'>
                  <h2>Here are some <span className='text-primary'>projects I've Made</span></h2>
                  <div className='boxes'>
                    <div className='box'>
                    <img src={require('./img/guess.jpg')} alt='guess-the-number' />
                    <div className='text-container'>
                    <h1>Guess the Number</h1>
                    <p>This is a javascript game that runs in the terminal. You set minimum and maximum parameters and the objective is to pick a number and the computer will guess what it is based on user response. Alternately, you can let the computer pick a number and it will let you guess what it is.</p><br /><br />
                    <a href='https://github.com/BurlingtonCodeAcademy/guess-the-number-gabesequeira'>Get the GitHub repository here!!</a>
                    </div>
                    </div>
                    <div className='box'>
                    <img src={require('./img/zorkington.png')} alt='zorkington' />
                    <div className='text-container'>
                      <h1>Pokemon Zorkington</h1>
                    <p>In this game, inspired by the original text-based adventure game, "Zork", we tried to capture the story of one of the original Pokemon games for Nintendo: Pokemon--Red Version.</p>
                    <br /><br /><a href='https://github.com/BurlingtonCodeAcademy/zorkington-gabe-christian/tree/master/Pokemon-Zorkington'>Pokemon Zorkington</a>
                    </div>
                    </div>
                    <section id='projects'>
                    <div className='box'>
                    <img src={require('./img/remock.png')} alt='remock' />
                    <div className='text-container'>
                      <h1>Remock</h1>
                    <p>In this project, I made a mock-up of a blog posting site using HTML, CSS, and Javscript.</p>
                    <br /><br /><a href='https://github.com/BurlingtonCodeAcademy/remock-gabesequeira'>Find the remock page here on GitHub</a>
                    </div>
                    </div>
                    <div className='box'>
                    <img src={require('../imgs/tic-tac-toe.png')} alt='tic-tac-toe' />
                    <div className='text-container'>
                      <h1>Tic-Tac-Toe</h1>
                    <p>For this project we made our own tic-tac-toe game complete with a timer. Accomodating to one- and two-player gameplay.</p>
                    <br /><br /><a href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-gabe-erin'>Find the tic-tac-toe game here on GitHub</a>
                    </div>
                    </div>
                    <div className='box'>
                    <img src={require('../imgs/geo-vermonter.png')} alt='geo-vermonter' />
                    <div className='text-container'>
                      <h1>Geo Vermonter</h1>
                    <p>This was a game in which the player is dropped on a map in a random location in Vermont and has to use directional buttons to move the screen and try to guess which of the fourteen Vermont counties they're in. Points are deducted for moving the viewport and guessing. Try to make the high score!</p>
                    <br /><br /><a href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-gabe-josh'>Check it out here on GitHub!!!</a>
                    </div>
                    </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            </div>
    );
  }
}

export default Projects;
