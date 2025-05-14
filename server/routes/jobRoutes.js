const express = require("express");
const router = express.Router();

const {getJobs, getJob, createJob} = require("../controllers/jobsController");

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJob);

module.exports = router;