import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`https://mini-job-board-backend.onrender.com/api/jobs/${id}`);
        setJob(response.data);
        setLoading(false);
      } catch (err) {
        setError('Job not found');
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-6">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mr-4">
          <span className="text-gray-500 text-2xl">{job.company.charAt(0)}</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <p className="text-xl text-gray-600">{job.company}</p>
          <div className="flex items-center mt-2">
            <span className="text-gray-500 mr-4">{job.location}</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {job.type}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
      </div>

      <div className="text-sm text-gray-500 mb-4">
        Posted on {new Date(job.createdAt).toLocaleDateString()}
      </div>

      <Link 
        to="/" 
        className="text-blue-600 hover:underline"
      >
        Back to Jobs
      </Link>
    </div>
  );
};

export default JobDetails;
