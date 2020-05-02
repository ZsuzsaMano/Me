import React from 'react';
import { Form } from '../Form/Form';
import './cover.css';

export class Cover extends React.Component{
  constructor(props) {
    super(props);
    this.state = { msr: '',
                  name: 'Human Resources Manager',
                  company: 'your company',
                  show: false,
                };

    this.handleChange = this.handleChange.bind(this);
    this.showMe = this.showMe.bind(this);
  }

  showMe() {
    this.setState({ show: true });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return <Form name={this.state.name}
                   msr={this.state.msr}
                   company = {this.state.company}
                    show = {this.state.show}
                   handleChange={this.handleChange}
                   showMe = {this.showMe}

                   />;

  }
}
