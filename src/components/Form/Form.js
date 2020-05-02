import React from 'react';
import './form.css';
import { Letter } from '../Letter/Letter';

export class Form extends React.Component{
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
          <option value="Zalando"/>
          <option value="Quandoo Gmbh"/>
          </datalist>
          <br/>
          <button onClick = {this.props.showMe} >Submit</button>

          { this.props.show && <Letter
              name={this.props.name}
               msr={this.props.msr}
               company = {this.props.company}
              />}
      </main>
    );
  }
}
