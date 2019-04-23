// const read = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const JobSchema = require('./models/Jobs');

const ObjectID = require('mongodb').ObjectID;

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

const url = 'mongodb://cwb_admin:1pwdadmin@ds133086.mlab.com:33086/appstat';

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log('mLab is now connected to MongoDB');
})

const Job = mongoose.model('Job', JobSchema);

// POST Job applied to

app.post('/job/create', (req, res) => {
  console.log('on /job/create, req.body sent in is :\n', req.body);
  const job = new Job(req.body);
  
  job.save((err, r) => {
    if (err) 
      res.send(err);
    res.json(job);
  })
});

// GET all jobs

app.get('/jobs', (req, res) => {
  Job.find((err, jobs) => {
    // why green squiggly under fat arrow above?
    if (err)
      res.send(err);
    res.json(jobs);
    console.log('response jobs is: \n', jobs)
  });
});

// GET specific job by id

app.get('/job/:id', (req, res) => {
  Job.findById(req.params.id, (err, job) => {
    if (err)
      res.send(err);
    res.json(job);
    console.log('response job is: \n', job)
  });
});

// PUT / update specific job by id

app.put('/job/edit/:id', (req, res) => {
  console.log('on job/edit/:id, req.body sent in is :\n', req.body);
  Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, job) => {
      if (err) return res.status(500).send(err);
      console.log('inside findByIdAndUpdate ', job)
      return res.send(job);
    }
  )
});

// DELETE specific job by id

app.delete('/job/delete/:id', (req, res) => {
  console.log('on job/delete/:id, req.body sent in is :\n', req.body);
  Job.deleteOne({
    _id: req.params.id
  }, (err, job) => {
    if (err)
      res.send(err);
    res.json({ message: 'Job successfully deleted' });
  })
});




app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


