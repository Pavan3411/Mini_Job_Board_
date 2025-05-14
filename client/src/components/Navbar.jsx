import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">JobBoard</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/add-job" className="text-gray-600 hover:text-blue-600">Add Job</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;