import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      dob: '',
      contact: '',
      email: '',
      password: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateForm = () => {
    const { name, age, dob, contact, email, password } = this.state;
    if (!name || !age || !dob || !contact || !email || !password) {
      alert('Please fill all fields');
      return false;
    }
    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid age');
      return false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert('Enter a valid email');
      return false;
    }
    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact)) {
      alert('Enter a valid 10-digit contact number');
      return false;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ message: 'Form is submitted!' });
      console.log('Form Data:', this.state);
      // Optionally reset form:
      // this.setState({ name:'', age:'', dob:'', contact:'', email:'', password:'' });
    }
  }

  render() {
    const { name, age, dob, contact, email, password, message } = this.state;

    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} /><br/>
          <input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} /><br/>
          <input type="date" name="dob" value={dob} onChange={this.handleChange} /><br/>
          <input type="text" name="contact" placeholder="Contact" value={contact} onChange={this.handleChange} /><br/>
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} /><br/>
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} /><br/>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>
    );
  }
}

export default SignupForm;
