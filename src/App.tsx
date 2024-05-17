import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footter from "./Components/Footter";
import Landing from "./Page/Landing/Landing";
import Login from "./Page/Login";
import Singup from "./Page/Signup";
import Company from "./Page/Company";
import CompanyDetail from "./Page/CompanyDetail";
import Blog from "./Page/Blog";
import Profile from "./Page/Profile";
import Lan from "./Page/Employer/Lan";
import Job from "./Page/Job";
import Info from "./Page/Employer/Info";
import NavEm from "./Page/Employer/Nav";
import Info2 from "./Page/Employer/Info2";
import Job1 from "./Page/Employer/Job";
import { AuthContextProvider } from "./Context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Dangnhap" element={<Login />} />
          <Route path="/Dangki" element={<Singup />} />
          <Route path="/Congty" element={<Company />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/companydetail/:companyId" element={<CompanyDetail />} />
          <Route path="/Timvieclam" element={<Job />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Nhatuyendung" element={<Lan />} />
          <Route path="/Nhatuyendung/Info" element={<Info />} />
          <Route path="/Nhatuyendung/Job" element={<Job1 />} />
          <Route path="/Nhatuyendung/Info2" element={<Info2 />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
