import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import PlanForm from "./components/PlanForm";
import Choose from "./pages/Choose";
import CompanyForm from "./components/CompanyForm";




const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}


const App = () => {
  return (


    <Router>
      <ToastContainer />
      <Routes>

        {/* userLayout */}

        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/form" element={<PlanForm />} />
          <Route path="/company_form" element={<CompanyForm />} />
          <Route path="/terms_condition" element={<Terms />} />
          <Route path="/privacy_policy" element={<Privacy />} />
          {/* <Route path="/contact" element={<Contact />} /> */}

        </Route>


        {/* adminLayout */}
        <Route path="/admin" element={<AdminLayout />} >

        </Route>

      </Routes>


    </Router>

  );
};

export default App;
