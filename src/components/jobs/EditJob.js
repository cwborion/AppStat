import React, { Component } from 'react'
import JobForm from './JobForm'

class EditJob extends Component {
  render () {
    // conditionally set up so that when editing, labels are active so that they don't overlap
    // with pre-filled input state (MAY NOT NEED TO DO THIS, MIGHT ALREADY BE A MATERIALIZE FEATURE)
    return (
      <div className="container">
        <h3 className='white-text'>Edit Job</h3>
        <JobForm />
      </div>
    )
  }
}

export default EditJob