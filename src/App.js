import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Cv } from './components/Cv/Cv';
import { Cover } from './components/Cover/Cover';
import { HashRouter as HashRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
    <div className="App">

<Navbar/>
<Switch>
<Route path='/' exact component= {Home}/>
<Route path='/Cv' component={Cv}/>
<Route path='/Cover' component={Cover}/>
</Switch>
        </div>
          </HashRouter>
  );
}

const Home = () =>(
  <div className = 'home container'>
  <Link to='/Cv'>
  <div className='row'>
  <div className='col'>
    <img  src="./img/rubber-duck.png" alt="rubber duck" />
    </div>
  <div className='button col'>

    <p>My name is Zsuzsa Lukács
    <br/>
     I'm a Web Developer</p>
</div>
  </div>
  </Link>
  </div>
);

export default App;
