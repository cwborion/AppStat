import React, { Component } from 'react'
import JobList from '../jobs/JobList'
import { connect } from 'react-redux'
import { getJobs } from '../../store/actions/jobActions'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: props.jobs
    }
    console.log(props)
  }

  componentDidMount() {
    this.props.getJobs()
      console.log(this.state);
  }

  render() {
    // console.log('props are: ', this.props);
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
  console.log('state mapped to props is: ', state);
  return {
    jobs: state.jobs.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)