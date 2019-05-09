const initState = [
    // {
    //   _id: '1',
    //   jobTitle: 'Software Developer',
    //   employer: 'Google',
    //   jobDescription: 'Implement firebase to products',
    //   skills: 'Firebase, HTML, CSS',
    //   dateApplied: Date.now(),
    //   notes: 'good pay'
    // },
    // {
    //   _id: '2',
    //   jobTitle: 'Front End Developer',
    //   employer: 'Austin Fraser',
    //   jobDescription: 'Develop products for clients',
    //   skills: 'Node, Git',
    //   dateApplied: Date.now(),
    //   notes: 'company helps people get jobs'
    // },
    // {
    //   _id: '3',
    //   jobTitle: 'Computer Programmer',
    //   employer: 'TelSys',
    //   jobDescription: 'Write functional code with existing software for products',
    //   skills: 'JavaScript, React, Node',
    //   dateApplied: Date.now(),
    //   notes: 'Company helps make money transferring efficient. No response so far.'
    // }
  ]

const jobReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      console.log('add job', action.payload);
      return [
        ...state, 
        action.payload
      ];
    case 'ADD_JOB_ERROR':
      console.log('add job error', action.payload);
      return state;
    case 'GET_ALL_JOBS':
      console.log('get all jobs', action.payload);
      return action.payload;
    case 'GET_ALL_JOBS_ERROR':
      console.log('get all jobs error', action.payload);
      return state;
    case 'GET_JOB':
      console.log('get job', action.payload);
      return state;
    case 'GET_JOB_ERROR':
      console.log('get job error', action.payload)
      return state;
    case 'UPDATE_JOB':
      console.log('update job', action.payload)
      return state.map((job) => job._id === action.payload._id ? action.payload : job);
    case 'UPDATE_JOB_ERROR':
      console.log('update job error', action.payload)
      return state;
    case 'DELETE_JOB':
      console.log('deleted job id is ', action.payload.id)
      return state.filter( job => job._id !== action.payload.id);
    case 'DELETE_JOB_ERROR': 
      console.log('delete job error', action.payload)
      return state;
    default:
      return state;
  }
};

export default jobReducer;