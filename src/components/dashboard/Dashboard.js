import React, { Component } from 'react'
import JobList from '../jobs/JobList'

class Dashboard extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='white-text'>Jobs you have applied to</h3>
        <div className="row">
          <div className="col s12 m8">
            <JobList />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard