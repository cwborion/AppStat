import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { getJobs, deleteJob } from '../../store/actions/jobActions'
import { jobByIdSelector } from '../../store/selectors'

class JobDetails extends Component {
  
  componentDidMount() {
    this.props.getJobs()
    // console.log(this.state);
  }

  handleDelete = () => {
    const id = this.props.match.params.id;
    this.props.deleteJob(id);
    this.props.history.push('/');
  }

  render() {
    const { job } = this.props;
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
                <p>Date applied to job: { moment(job.dateApplied).add(1, 'days').format('L') }</p>
                <p>Additional Notes/Responses: { job.notes }</p>
                <br/>
                <Link className="white-text edit-button" to={'/edit-job/' + this.props.match.params.id}>EDIT JOB INFO</Link> 
                <br/>
                <button className="btn red delete-button z-depth-0" onClick={this.handleDelete}>Delete Job</button>
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

}

const mapStateToProps = (state, ownProps) => {
  // console.log('state is: ', state);
  const id = ownProps.match.params.id;
  return {
    job: jobByIdSelector(state, id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // const id = ownProps.match.params.id;
  // console.log('id is', id);
  return {
    getJobs: () => dispatch(getJobs()),
    deleteJob: (id) => dispatch(deleteJob(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails)