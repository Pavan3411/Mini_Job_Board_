import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddJob from './pages/AddJob'
import JobDetails from './pages/JobDetails'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
