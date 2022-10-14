import 'bootstrap/dist/css/bootstrap.css';

import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/registration";
import Notfound from "./components/notfound";
// import users from "./components/users";
import Users from "./components/userss";
// import Adduser from './components/usersss/AddUser';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser/>}/>
          <Route exact path="/users/:id" element={<User/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
