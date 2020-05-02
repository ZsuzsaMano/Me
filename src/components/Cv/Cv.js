import React from 'react';
import './cv.css';

export class Cv extends React.Component{
  render() {
    return (
      <div className = "container">
    <main  className = "row">
        <div className="col grey me">
        <img id='self' src="./img/en.jpeg" alt="Zsuzsa Lukacs" />
        <br/>
        <h1>Zsuzsa Lukács</h1>
        <br/>


        <img className="contact" src="./img/phone.png" alt="phone"/>
        <a href="tel:+4915214011940">+4915214011940</a>
        <br/>
        <img className="contact" src="./img/email.png" alt="email"/>
      	webdev.zsuzsa@gmail.com
        <br/>
        <a href="http://www.linkedin.com/in/zsuzsa-lukacs">
        <img class="contact" src="img/linkedin.png" alt="linkedin"/> LinkedIn</a>
        <br/>
        <a href="https://github.com/zsuzsamano">
        <img class="contact" src="img/git.png" alt="github"/> GitHub </a>
        <br/>
        <a href="https://codepen.io/zsuzsamano/">
         <img class="contact" src="img/codepen.png" alt="codepen"/> Codepen</a>

      </div>
      <div className="col grey">

        <h3>Education</h3>
        <h5>Eötvös Loránd University</h5>
        <h6>Applied Mathematics</h6>
        <br/>

        <h5>Eötvös Loránd University</h5>
        <h6>Philosophy</h6>

        <br/>
        <h5>Codecademy</h5>
        <h6>Web Development</h6>

        <br/>

        <h5>CodeWithMosh</h5>
        <h6>Node js</h6>

        <br/>

        <h3>Projects</h3>
        <ul>
          <li><a href="https://zsuzsamano.github.io/eatOut/">eatOut</a></li>
          <li><a href="https://zsuzsamano.github.io/Tea-Party/">Tea-shop </a></li>
          <li><a href="http://www.szbd.hu">Hungarian NGO </a> </li>
        </ul>




      </div>
      <div className="col third grey">

      <h3>Skills</h3>
      <ul>
        <li>HTML 5</li>
        <li>CSS 3 / SCSS </li>
        <li>Bootstrap 4</li>
        <li>JavaScript ES6+</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Handlebars.js</li>
        <li>React</li>
      </ul>

        <h3>Languages</h3>
        <ul>
          <li>English</li>
          <li>Spanish</li>
          <li>Hungarian</li>
          <li>German</li>
          <li>Italian</li>
        </ul>




      </div>
    </main>
    </div>

);
  }
}
