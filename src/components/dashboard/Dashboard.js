import React, { Component } from 'react'
import JobList from '../jobs/JobList'
import { connect } from 'react-redux'

class Dashboard extends Component {
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

export default connect(mapStateToProps)(Dashboard)