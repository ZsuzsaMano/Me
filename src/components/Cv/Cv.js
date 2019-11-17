import React from 'react';
import './cv.css';

export class Cv extends React.Component{
  render() {
    return (
      <div className = "container">
    <main  className = "row">
        <div className="col grey me">
        <img id='self' src="./img/en.jpg" alt="Zsuzsa Lukacs" />
        <br/>
        <h1>Zsuzsa Lukács</h1>
        <br/>


        <img className="contact" src="./img/phone.png" alt="phone"/>
        <a href="tel:+4915214011940">+4915214011940</a>
        <br/>
        <img className="contact" src="./img/email.png" alt="email"/>
      	webdev.zsuzsa@gmail.com
        <br/>
        <a href="  http://www.linkedin.com/in/zsuzsa-lukacs"><img class="contact" src="img/linkedin.png" alt="linkedin"/> LinkedIn</a>
        <br/>
        <a href="https://github.com/zsuzsamano"> <img class="contact" src="img/git.png" alt="github"/> GitHub </a>


      </div>
      <div className="col grey">

        <h3>Education</h3>
        <h5>Eötvös Loránd University</h5>
        <h6>Applied Mathematics</h6>
        <br/>

        <h5><a href="https://www.codecademy.com/profiles/Zsuzsa_Mano">Codecademy</a></h5>
        <h6>Web Development</h6>

        <br/>
        <h5>edX</h5>
        <h6>CS50W</h6>

        <br/>

        <h3>Skills</h3>
        <ul>
          <li>HTML 5</li>
          <li>CSS 3 / Sass </li>
          <li>Bootstrap 4</li>
          <li>JavaScript ES8</li>
          <li>Handlebars.js</li>
          <li>React</li>
          <li>Git</li>
          <li>Command Line</li>
        </ul>

      </div>
      <div className="col third grey">
        <h3>Projects</h3>
        <ul>
          <li> <a href="http://www.szbd.hu/static">szbd.hu</a> </li>
          <li>...</li>
        </ul>

        <h3>I'm working with</h3>
        <ul>
          <li>Atom</li>
          <li>GitHub</li>
          <li>Linux</li>
          <li>Gimp</li>

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

)
  }
}
