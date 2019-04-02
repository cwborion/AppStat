import React from 'react'

const JobSummary = ({ job }) => {
  return(
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{ job.jobTitle } - { job.id }</span>
        <p>Company: { job.employer }</p>
        <p className="grey-text">Date applied { job.dateApplied } 'March 27th, 2019'</p>
      </div>
    </div>
  )
}

export default JobSummary