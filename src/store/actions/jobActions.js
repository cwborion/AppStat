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

export const getJobs = () => {
  return (dispatch, getState) => {
    return fetch('http://localhost:3001/jobs', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then((jobs) => {
        console.log('jobs res is ', jobs);
        dispatch({ type: 'GET_ALL_JOBS', jobs })
        return jobs;
      }).catch((err) => {
        dispatch({ type: 'GET_ALL_JOBS_ERROR', err })
      });
  };
}


