import Navbar from "./components/Navbar";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/useReducer";

export const userContext = createContext()
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router >
    </userContext.Provider>
  );
}

export default App;