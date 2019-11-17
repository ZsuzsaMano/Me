import React from 'react';
import './letter.css';
import { Link } from 'react-router-dom';

export class Letter extends React.Component{
  render() {
    return (
      <main className='container'>
          <select name = 'msr'
          onChange={this.props.handleChange}>
          <option value=''> </option>
          <option value='Mr'> Mr</option>
          <option value='Ms'> Ms</option>
          <option value='Mrs'> Mrs</option>
          </select>

          <label for="dear"></label>
          <input type="text" name="name" placeholder="your name"
          onChange={this.props.handleChange}/>
          <br/>

          <input name='company' list="company" placeholder="company"
          onChange={this.props.handleChange}/>
          <datalist id="company">
          <option value="Accenture"/>
          </datalist>
          <br/>
          <button>Submit</button>



        <div id='formalLetter' className="letter grey">
          Dear {this.props.msr} {this.props.name},

          <br/>
          I would like to apply for the job posted on your website as a web developer.
          As you'll see, I have hands-on experience efficiently coding websites using HTML, CSS,
          and JavaScript.
          <br/>
          At the moment I'm running a small business with few employees, I built a system to keep track of
           stock and customer choices, and by now, it mostly runs by itself.
           <br/>
           Looking for something new to learn, I found Web Development, and it became my true passion.
           I did websites for NGOs, and friends, some I mention in my CV between my projects.
           I'm a fast learner, always eager to know more.
    <br/>
    I am confident I would be an
      excellent addition to {this.props.company} . In addition to my knowledge base,
       I actively seek out
       new technologies and stay up-to-date on industry trends and advancements.
           <br/>
           You can see on <Link to='/Cv'>my resume </Link>
                 detailing my skills, along with links
                to websites I’ve had the honor of working on.
                <br/>

           <br/>
           You can find my <Link to='/Cv'> contact here.
           </Link>

         </div>






      </main>
    );
  }
}
