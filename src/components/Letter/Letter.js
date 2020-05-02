import React from 'react';
import './letter.css';
import { Link } from 'react-router-dom';

export class Letter extends React.Component{
  render () {
    return (
      <div id='formalLetter' className="letter grey">
      <h6>  Dear {this.props.msr} {this.props.name}   </h6>
      <br/>
        I would like to apply for the job posted on your website as a junior/intern web developer.
        <br/>
        As you see, I have hands-on experience efficiently coding websites using HTML, CSS,
        JavaScript.
        <br/>
        Since 2009 I'm the sales manager of a small business with few employees, I built a system to keep track of
         stock and customer choices.
         <br/>
         Web Development became my true passion during the last years, and I would like to start
         a carrier in this field.
         I did websites for NGOs, and friends, some I mention in my CV between my projects.
         <br/>
         I'm a fast learner, always eager to know more.
         Being a mother of two, I learned to deal fast and efficient with upcoming challanges.
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
  );
  }
}
