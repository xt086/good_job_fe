import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing/Landing";
import Login from "./Page/Login";
import Singup from "./Page/Signup";
import Company from "./Page/Company";
import Blog from "./Page/Blog";
import Profile from "./Page/Profile";
import Lan from "./Page/Employer/Lan";
import Job from "./Page/Job";
import Info from "./Page/Employer/Info";
import Job1 from "./Page/Employer/Job";
import PrivateRoute from "./Context/ProtectRoute";
import AuthRoute from "./Context/AuthRoute";
import { AuthProvider } from "./Context/AuthContext";
import CompanyDetail from "./Page/CompanyDetail";
import JobDetail from "./Page/JobDetail";
import Employee from "./Page/Employer/Employee";
import CV from "./Page/Employer/CV";
import { ToastContainer } from "react-toastify";
import CvDetail from "./Page/Employer/CVDeitail";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/dangnhap" element={<AuthRoute element={<Login />} />} />
          <Route path="/dangki" element={<AuthRoute element={<Singup />} />} />
          <Route path="/" element={<PrivateRoute element={<Landing />} />} />
          <Route
            path="/congty"
            element={<PrivateRoute element={<Company />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route
            path="/chitietcongty/:companyId"
            element={<PrivateRoute element={<CompanyDetail />} />}
          />
          <Route
            path="/timvieclam"
            element={<PrivateRoute element={<Job />} />}
          />
          <Route
            path="/chitetvieclam/:jobId"
            element={<PrivateRoute element={<JobDetail />} />}
          />
          <Route path="/blog" element={<PrivateRoute element={<Blog />} />} />
          <Route
            path="/nhatuyendung"
            element={<PrivateRoute element={<Lan />} />}
          />
          <Route
            path="/nhatuyendung/thongtin"
            element={<PrivateRoute element={<Info />} />}
          />
          <Route
            path="/nguoilaodong"
            element={<PrivateRoute element={<Employee />} />}
          />
          <Route
            path="/nhatuyendung/congviec"
            element={<PrivateRoute element={<Job1 />} />}
          />

          <Route
            path="/danhsachcv"
            element={<PrivateRoute element={<CV />} />}
          />

          <Route
            path="/chitietcv/:jobId"
            element={<PrivateRoute element={<CvDetail />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
