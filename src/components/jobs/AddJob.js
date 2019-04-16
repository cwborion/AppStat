import React, { Component } from 'react'
import JobForm from './JobForm'
import { connect } from 'react-redux'
import { addJob } from '../../store/actions/jobActions'

class AddJob extends Component {
  
  handleSubmit = (job) => {
    this.props.addJob(job);
    this.props.history.push('/');
  }

  render () {
    return (
      <div className="container">
        <h3 className='white-text'>Add Job</h3>
        <JobForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addJob: (job) => dispatch(addJob(job))
  }
}

export default connect(null, mapDispatchToProps)(AddJob)