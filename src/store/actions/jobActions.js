export const addJob = (job) => {
  return (dispatch, getState) => {
    return fetch('http://localhost:3001/job/create', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(job),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch({ type: 'ADD_JOB', job });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_JOB_ERROR', err });
      });
  }
};

// not sure if will need below code
export const getJobs = (jobs) => {
  return (dispatch, getState) => {
    return fetch('http://localhost:3001/jobs')
    .then(() => {
      dispatch({ type: 'GET_ALL_JOBS', jobs});
    })
    .catch((err) => {
      dispatch({ type: 'GET_ALL_JOBS_ERROR', err});
    })
  }
}