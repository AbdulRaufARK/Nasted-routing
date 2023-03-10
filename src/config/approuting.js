import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import SMlogin from "../component/login";
import SMsignup from "../component/Signup";
import SMDashboard from "../screen/dashboard";
import SMDrawer from "../screen/dashboard1";





export default function SMapprouting() {
  return (
    <BrowserRouter>
    <Routes >
        <Route path="/Signup" element={<SMsignup />} />
        <Route path="/Login" element={<SMlogin />} />
        <Route path="/dashboard/*" element={<SMDashboard/>} />
        <Route path="/ResponsiveDrawer/*" element={<SMDrawer/>}/>

    </Routes>
    </BrowserRouter>
  )
}
