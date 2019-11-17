import React from 'react';
import {Letter} from '../Letter/Letter';
import './cover.css';

export class Cover extends React.Component{
  constructor(props) {
    super(props);
    this.state = { msr: '',
                  name: 'Human Resources Manager',
                  company: 'company',
                  show: false,
               };
    this.handleChange = this.handleChange.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({ name: newName });
    }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return <Letter name={this.state.name}
                   msr={this.state.msr}
                   company = {this.state.company}
                   handleChange={this.handleChange}
                   />;

  }
}
