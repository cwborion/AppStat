import React, { Component } from 'react'

class JobForm extends Component {
  state = {
    jobTitle: '',
    employer: '',
    jobDescription: '',
    skills: '',
    dateApplied: Date,
    notes: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    // console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m10">
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className="grey-text text-darken-3">Job Information</h5>
            <div className="input-field">
              <label htmlFor='jobTitle' className="grey-text text-darken-2">Job Title</label>
              <input type='text' id='jobTitle' onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor='employer' className="grey-text text-darken-2">Company/Employer</label>
              <input type='text' id='employer' onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor='jobDescription' className="grey-text text-darken-2">Job Description</label>
              <textarea id='jobDescription' className="materialize-textarea" onChange={this.handleChange}>
              </textarea>
            </div>

            <div className="input-field">
              <label htmlFor='skills' className="grey-text text-darken-2">Emphasized Skills</label>
              <textarea id='skills' className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>

            <div>
              <label htmlFor='dateApplied' className="grey-text text-darken-2">Date of application submitted</label>
              <input type='date' id='dateApplied' onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor='notes' className="grey-text text-darken-2">Additional Notes/Responses</label>
              <textarea id='notes' className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>

            <div className="input-field">
              <button className="btn z-depth-0">Save Job</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default JobForm