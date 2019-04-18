import React from 'react'
import moment from 'moment'

const JobSummary = ({ job }) => {
  return(
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{ job.jobTitle } - { job._id }</span>
        <p>Company: { job.employer }</p>
        <p className="grey-text">Date applied: { moment(job.dateApplied).add(1, 'days').format('L') }</p>
      </div>
    </div>
  )
}

export default JobSummary