import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Contact from './pages/Contact';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">User Profile</h2>
          <UserCard name="Dnyaneshwar Suwarnkar" email="sdnyaneshwar9421@gmail.com" />
        </div>
      </div>
    </Router>
  );
}

export default App;