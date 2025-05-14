const Job = require("../models/jobModel");

// to get all jobs
const getJobs = async (req,res) => {
    try {
        const jobs = await Job.find().sort({createdAt: -1});
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// to get single job

const getJob = async (req,res) => {
    try {
        const job = await Job.findById(req.params.id);
        if(!job) return res.status(404).json({message: "Job not found"});
        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// to create a job
const createJob = async (req,res) => {
    const {title,company,type,location,description} = req.body;
    if(!title || !company || !type || !location || !description) return res.status(400).json({message: "All fields are required"});
    const job = new Job({title,company,type,location,description});

    try{
        const newJob = await job.save();
        res.status(201).json(newJob);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports = {
    getJobs,
    getJob,
    createJob
}
