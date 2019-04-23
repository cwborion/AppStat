export const jobsSelector = (state) => state.jobs;

export const jobByIdSelector = (state, id) => jobsSelector(state).find(job => job._id === id);