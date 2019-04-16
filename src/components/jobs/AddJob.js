import React, { Component } from 'react'
import JobForm from './JobForm'

class AddJob extends Component {
  render () {
    return (
      <div className="container">
        <h3 className='white-text'>Add Job</h3>
        <JobForm />
      </div>
    )
  }
}

export default AddJob