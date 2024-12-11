// import React from 'react';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import LandingPage from './pages/LandingPage/LandingPage';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//     </Routes>
//   );
// }

// export default App;
import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <Outlet />
    </>
  )
}

export default App

