import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('state is: ', this.state);
  }

  render() {
    return(
      <div className="container">
        <form className='white' onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email" className="grey-text text-darken-2">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="grey-text text-darken-2">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor='firstName' className="grey-text text-darken-2">First Name</label>
            <input type='text' id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor='lastName' className="grey-text text-darken-2">Last Name</label>
            <input type='text' id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp