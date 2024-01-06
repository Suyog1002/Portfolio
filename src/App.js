import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './component/Portfolio';
import Skills from './component/Skills';
import Contact from './component/Contact';

function App() {
  const appStyle = {
    backgroundColor: '#e0f7fa', 
    minHeight: '100vh', 
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
