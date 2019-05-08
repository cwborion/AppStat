// export const addJob = (job) => {
//   return (dispatch, getState) => {
//     return fetch('http://localhost:3001/job/create', {
//       method: 'POST',
//       mode: 'cors',
//       body: JSON.stringify(job),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(() => {
//         dispatch({ type: 'ADD_JOB', payload: job });
//       })
//       .catch((err) => {
//         dispatch({ type: 'ADD_JOB_ERROR', payload: err });
//       });
//   }
// };

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
    .then((res) => {
      const newJobPromise = res.json();
      newJobPromise.then((job) => {
        console.log('job added is ', job);
        dispatch({ type: 'ADD_JOB', payload: job });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_JOB_ERROR', payload: err });
      });
    }).catch(err => console.log(err))
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
        dispatch({ type: 'GET_ALL_JOBS', payload: jobs })
        return jobs;
      }).catch((err) => {
        dispatch({ type: 'GET_ALL_JOBS_ERROR', payload: err })
      });
  };
}

export const getJob = (_id) => {
  return (dispatch, getState) => {
    return fetch(`http://localhost:3001/job/${_id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then((job) => {
        console.log('job res is ', job);
        dispatch({ type: 'GET_JOB', payload: job })
        return job;
      }).catch((err) => {
        dispatch({ type: 'GET_JOB_ERROR', payload: err })
      });
  };
}

export const updateJob = (id, job) => {
  console.log('job id is ', id);
  return (dispatch, getState) => {
    return fetch(`http://localhost:3001/job/edit/${id}`, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(job),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      const newJobPromise = res.json();
      newJobPromise.then((job) => {
        console.log('job update res is ', job);
        dispatch({ type: 'UPDATE_JOB', payload: job });
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_JOB_ERROR', payload: err });
      }); 
    }).catch(err => console.log(err))
  }
};

export const deleteJob = (id) => {
  // console.log('job id in DELETE job is', id);
  return (dispatch, getState) => {
    return fetch(`http://localhost:3001/job/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then((job) => {
        dispatch({ type: 'DELETE_JOB', payload: job })
        console.log('job deleted is', job)
    })
    .catch((err) => {
      dispatch({ type: 'DELETE_JOB_ERROR', payload: err })
    }).catch(err => console.log(err))
  }
}

// export const deleteJob = (id) => {
//   console.log('job id in DELETE job is', id);
//   return (dispatch, getState) => {
//     return fetch(`http://localhost:3001/job/delete/${id}`, {
//       method: 'DELETE',
//       mode: 'cors'
//     })
//     .then(response => response.json())
//     .then((job) => {
//       console.log('response from delete job is', job);
//       dispatch({ type: 'DELETE_JOB', payload: job })
//         return job;
//     })
//     .catch((err) => {
//       dispatch({ type: 'DELETE_JOB_ERROR', payload: err })
//     });
//   }
// }


