import React, { Component } from 'react'
import JobList from '../jobs/JobList'
import { connect } from 'react-redux'
import { getJobs } from '../../store/actions/jobActions'

class Dashboard extends Component {

  componentDidMount() {
    return fetch('http://localhost:3001/jobs')
    .then((res) => res.json())
    .then(jobs => this.setState({ jobs }))
    .then(() => console.log('this.state.jobs is: ', this.state.jobs))
    .catch(err => console.log('error: ', err));
    // this.props.getJobs();
  }

  render() {
    console.log('props are: ', this.props);
    const { jobs } = this.props;
    return (
      <div className='container'>
        <h3 className='white-text'>Jobs you have applied to</h3>
        <div className="row">
          <div className="col s12 m8">
            <JobList jobs={jobs} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state.jobs.jobs is: ', state.jobs.jobs);
  return {
    jobs: state.jobs.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: (jobs) => dispatch(getJobs(jobs))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)