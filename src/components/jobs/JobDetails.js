import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const JobDetails = (props) => {
  const { job } = props;

  console.log('props are: ', props);

  if (job) {
    return (
      <div className="container row">
        <div className="col s12 m8">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{ job.jobTitle }</span>
              <p>{ job.employer }</p>
              <p>Description: { job.jobDescription }</p>
              <p>Emphasized skills: { job.skills }</p>
              <p>Date applied to job: { job.dateApplied } 'March 27th, 2019'</p>
              <p>Additional Notes/Responses: { job.notes }</p>
              <Link className="white-text edit-buttons" to='/edit-job'>Edit Job Info</Link>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p className='white-text'>Loading Job...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state is: ', state);
  const id = ownProps.match.params.id;
  const jobs = state.jobs.jobs;
  // const job = jobs ? jobs[id] : null; // this is where things are messing up
  console.log('id is: ', id);
  return {
    job: jobs.find(job => job.id === id)
  }
}

export default connect(mapStateToProps)(JobDetails)