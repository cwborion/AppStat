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
// this is where the new state should be set. NOT from Dashboard.js
export const getJobs = (jobs) => {
  return (dispatch, getState) => {
    return fetch('http://localhost:3001/jobs')
    .then(() => {
      dispatch({ type: 'GET_ALL_JOBS', jobs});
      console.log(jobs);
    })
    .catch((err) => {
      dispatch({ type: 'GET_ALL_JOBS_ERROR', err});
    })
  }
}

// export const getJobs = (jobs) => {
//   return (dispatch, getState) => {
//     const state = getState(jobs);
//     return fetch('http://localhost:3001/jobs')
//       .then((res) => res.json())
//       .then(() => {
//         dispatch({ type: 'GET_ALL_JOBS', jobs });
//         console.log(jobs);
//       })
//       .then(() => {
//         console.log('log is', state.jobs);
//       })
//       .catch(err => console.log('error: ', err));
//   }
// }

