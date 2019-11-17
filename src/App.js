import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Cv } from './components/Cv/Cv';
import { Cover } from './components/Cover/Cover';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">

<Navbar/>
<Switch>
<Route path='/' exact component= {Home}/>
<Route path='/Cv' component={Cv}/>
<Route path='/Cover' component={Cover}/>
</Switch>
        </div>
          </Router>
  );
}

const Home = () =>(
  <div className = 'home container'>
  <Link to='/Cv'>
  <div className='row'>
  <div className='button col'>
  <div className='line'></div>
  <div className='line'></div>
  <div className='line'></div>
  <div className='line'></div>
  <div className='line'></div>
  <div className='line'></div>
    <p>My name is Zsuzsa Lukács
    <br/>
     I'm a Web Developer</p>
</div>
  </div>
  </Link>
  </div>
);

export default App;
