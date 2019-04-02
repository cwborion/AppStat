const initState = {
  jobs: [
    { 
      id: '1', 
      jobTitle: 'Software Developer', 
      employer: 'Google', 
      jobDescription: 'Implement firebase to products', 
      skills: 'Firebase, HTML, CSS', 
      dateApplied: Date.now(),
      notes: 'good pay' 
    },
    { 
      id: '2', 
      jobTitle: 'Front End Developer', 
      employer: 'Austin Fraser', 
      jobDescription: 'Develop products for clients', 
      skills: 'Node, Git', 
      dateApplied: Date.now(),
      notes: 'company helps people get jobs' 
    },
    { 
      id: '3', 
      jobTitle: 'Computer Programmer', 
      employer: 'TelSys', 
      jobDescription: 'Write functional code with existing software for products', 
      skills: 'JavaScript, React, Node', 
      dateApplied: Date.now(),
      notes: 'Company helps make money transferring efficient. No response so far.' 
    }
  ]
}

const jobReducer = (state = initState, action) => {
  return state;
}

export default jobReducer