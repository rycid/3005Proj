import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './App.scss';
import SideBar from './components/SideBar';
import Header from './components/Header';

//pages/views
import Home from './views/Home';
import Profile from './views/Profile';
import Schedule from './views/Schedule';
import Settings from './views/Settings';
import NotFound from './views/NotFound';
import About from './views/About';

const App = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-wrapper">
        <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="main-content">
          <Header /> 
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
