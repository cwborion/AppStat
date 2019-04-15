import React from 'react'
import JobSummary from './JobSummary'
import { Link } from 'react-router-dom'

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs && jobs.map(job => {
        return (
          <Link to={'/job' + job._id} key={job._id}>
            <JobSummary job={job} />
          </Link>
        )
      })}
    </div>
  )
}

export default JobList