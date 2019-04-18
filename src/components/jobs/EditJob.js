import React, { Component } from 'react'
import JobForm from './JobForm'
import { connect } from 'react-redux'
import { getJob, updateJob } from '../../store/actions/jobActions'

class EditJob extends Component {

  componentDidMount() {
    console.log('this.props are ', this.props)
    this.props.getJob(this.props.match.params.id)
  }

  handleSubmit = (job) => {
    this.props.updateJob(this.props.match.params.id, job);
    // this.props.history.push('/job/' + this.props.match.params.id);
    this.props.history.push('/');
  }

  render () {
    // conditionally set up so that when editing, labels are active so that they don't overlap
    // with pre-filled input state (MAY NOT NEED TO DO THIS, MIGHT ALREADY BE A MATERIALIZE FEATURE)
    const { job } = this.props;
    return (
      <div className="container">
        <h3 className='white-text'>Edit Job</h3>
        <JobForm job={job} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state mapped in EditJob.js is', state)
  const id = ownProps.match.params.id;
  const jobs = state.jobs.jobs;
  return {
    job: jobs.find(job => job._id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJob: (id) => dispatch(getJob(id)),
    updateJob: (id, job) => dispatch(updateJob(id, job))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJob)