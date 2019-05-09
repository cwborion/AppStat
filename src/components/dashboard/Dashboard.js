import React, { Component } from 'react'
import JobList from '../jobs/JobList'
import { connect } from 'react-redux'
import { getJobs } from '../../store/actions/jobActions'
import { jobsSelector } from '../../store/selectors'

class Dashboard extends Component {
  
  componentDidMount() {
    this.props.getJobs()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate firing!', prevProps)
    if (this.state !== prevState) {
      this.props.getJobs();
    }
  }
  // perhaps put setState call in componentDidUpdate()?

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
  // console.log('state mapped to props in Dashboard.js is: ', state);
  return {
    jobs: jobsSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)