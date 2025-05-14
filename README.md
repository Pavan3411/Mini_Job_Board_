# Job Board Application

A simple job board application built with React, Node.js, Express, and MongoDB.

## Features

* View all job listings
* Add new job postings
* View individual job details
* Search functionality
* Responsive design

## Technologies Used

* **Frontend**: React, Tailwind CSS
* **Backend**: Node.js, Express
* **Database**: MongoDB

## Setup Instructions

### Backend Setup

To set up the backend, go to the `server` folder, create a `.env` file, and add your `PORT` and `MONGO_URL` variables. After setting up the environment file, run the backend by executing `node index.js`.

### Frontend Setup

For the frontend, navigate to the `client` folder, run `npm install` to install the dependencies, and then start the development server using `npm run dev`. Make sure to update the frontend code to use the correct backend URL by replacing the default `localhost` with your actual backend URL.

Also, ensure that CORS is configured on the backend to allow requests from your frontend’s URL.
