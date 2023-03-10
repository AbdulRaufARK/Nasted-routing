
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import SMapprouting from './config/approuting';
function App() {
  return (
    <>
   {/* <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<SMapprouting />} />
    </Routes>
    </BrowserRouter> */}
    <SMapprouting />
    
    </>
  );
}

export default App;
