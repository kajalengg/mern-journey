import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Service";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AdminLayout from "./components/layouts/admin-layout";
import Users from "./pages/Users";
import Contacts from "./pages/Contacts";
import ServicesList from "./pages/Services";
import AdminUpdate from "./pages/Admin-Update";
import AdminAddService from "./pages/AdminAddService";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />

          <Route path="contacts" element={<Contacts />} />

          <Route path="services" element={<ServicesList />} />
          <Route path="services/add" element={<AdminAddService />} />
        </Route>

        {/* Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;