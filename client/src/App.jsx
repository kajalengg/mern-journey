import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Service';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/error';
import Logout from './pages/Logout';
import AdminLayout from './components/layouts/admin-layout';
import Users from './pages/Users';
import Contacts from './pages/Contacts';
import ServicesList from './pages/Services';
import AdminUpdate from './pages/Admin-Update';

const App = () => {
  return <>
  
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path='*'element={<Error />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/admin" element={<AdminLayout />}>
      <Route path='users' element={<Users />}/>
      <Route path='contacts' element={<Contacts />}/>
      <Route path='Service' element={<ServicesList />}/>
      <Route path='users/:id/edit' element={<AdminUpdate />}/>
    </Route>
    
  </Routes>
  <Footer />
  
  </>;
}

export default App