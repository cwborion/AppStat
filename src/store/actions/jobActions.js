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
        // return jobs;
      }).catch((err) => {
        dispatch({ type: 'GET_ALL_JOBS_ERROR', err })
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
        dispatch({ type: 'GET_JOB', job })
        return job;
      }).catch((err) => {
        dispatch({ type: 'GET_JOB_ERROR', err })
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
    }).then((response) => response.json())
      .then((job) => {
        console.log('job update res is ', job);
        dispatch({ type: 'UPDATE_JOB', job });
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_JOB_ERROR', err });
      });
  }
};


