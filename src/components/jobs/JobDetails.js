import React from 'react'
import { Link } from 'react-router-dom'

const JobDetails = () => {
  return (
    <div className="container row">
      <div className="col s12 m8">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Software Developer</span>
            <p>BrookSource</p>
            <p>--description-- write sustainable code with JavaScript, React, HTML, CSS to deliver quality products</p>
            <p>Emphasized skills: JavaScript, React, Node, PHP, SQL</p>
            <p>Date applied to job: March 27th, 2019</p>
            <Link className="white-text edit-buttons" to='/edit-job'>Edit Job Info</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails