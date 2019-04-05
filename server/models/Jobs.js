const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      // required: true,
      trim: true
    },
    employer: {
      type: String,
      // required: true,
      trim: true
    },
    jobDescription: {
      type: String,
      // required: true,
      trim: true
    },
    skills: {
      type: String,
      // required: true,
      trim: true
    },
    dateApplied: {
      // required: true,
      type: Date
    },
    notes: {
      type: String,
      trim: true
    }
  }
);

module.exports = JobSchema;