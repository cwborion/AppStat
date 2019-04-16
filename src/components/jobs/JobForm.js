import React, { Component } from 'react'
import moment from 'moment'

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Caleb',
      lastName: 'Brenner',
      jobTitle: props.job ? props.job.jobTitle : '',
      employer: props.job ? props.job.employer : '',
      jobDescription: props.job ? props.job.jobDescription : '',
      skills: props.job ? props.job.employer : '',
      dateApplied: props.job ? props.job.dateApplied : moment(Date.now()).format('YYYY-MM-DD'),
      notes: props.job ? props.job.notes : ''
    }
  }
  
  componentDidMount() {
    console.log('props are' , this.props)
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
    this.props.handleSubmit(this.state);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col s12 m10">
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className="grey-text text-darken-3">Job Information</h5>
            <div className="input-field">
              <label 
                htmlFor='jobTitle' 
                className={"grey-text text-darken-2 " + (this.props.job ? "active" : null)}>Job Title
              </label>
              <input 
                type='text' 
                id='jobTitle' 
                value={this.state.jobTitle} 
                onChange={this.handleChange} 
              />
            </div>

            <div className="input-field">
              <label 
                htmlFor='employer' 
                className={"grey-text text-darken-2 " + (this.props.job ? "active" : null)}>
                Company/Employer
              </label>
              <input 
                type='text' 
                id='employer' 
                value={this.state.employer} 
                onChange={this.handleChange} 
              />
            </div>

            <div className="input-field">
              <label 
                htmlFor='jobDescription' 
                className={"grey-text text-darken-2 " + (this.props.job ? "active" : null)}>
                Job Description
              </label>
              <textarea 
                id='jobDescription' 
                className="materialize-textarea" 
                value={this.state.jobDescription} 
                onChange={this.handleChange}>
              </textarea>
            </div>

            <div className="input-field">
              <label 
                htmlFor='skills' 
                className={"grey-text text-darken-2 " + (this.props.job ? "active" : null)}>
                Emphasized Skills
              </label>
              <textarea 
                id='skills' 
                className="materialize-textarea" 
                value={this.state.skills} 
                onChange={this.handleChange}>
              </textarea>
            </div>

            <div>
              <label 
                htmlFor='dateApplied' 
                className={"grey-text text-darken-2 " + (this.props.job ? "active" : null)}>
                Date of application submitted
              </label>
              <input 
                type='date' 
                id='dateApplied' 
                // value={this.state.dateApplied} 
                value={moment(this.state.dateApplied).format('YYYY-MM-DD')} 
                onChange={this.handleChange} 
              />
            </div>

            <div className="input-field">
              <label 
                htmlFor='notes' 
                className={"grey-text text-darken-2 " + (this.props.job ? "active" : null)}>
                Additional Notes/Responses
              </label>
              <textarea 
                id='notes' 
                className="materialize-textarea" 
                value={this.state.notes} 
                onChange={this.handleChange}>
              </textarea>
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