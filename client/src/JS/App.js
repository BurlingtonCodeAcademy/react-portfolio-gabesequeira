import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Hobbies from './Hobbies'
import Projects from './Projects'
import Work from './Work'
import Header from './Header'
import Footer from './Footer'
let favicon;


function getFaviconEl() {
favicon = document.getElementById("favicon");
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount(){
    getFaviconEl();
    let listItem = Math.floor(Math.random() * 3);
    favicon.href=`favicon${listItem}.ico`
}

  render() {
  return (
    <div className="App">
      <Header />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/hobbies' component={Hobbies} />
        <Route path='/work' component={Work} />
        <a href='https://www.google.com/'><i class='fab fa-facebook-f'></i></a>
      </Switch>
      <Footer />
    </div>
  );
}
}

export default App;
