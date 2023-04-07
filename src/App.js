import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/Signup';
import UpdateProfile from './pages/UpdateProfile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/update" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
