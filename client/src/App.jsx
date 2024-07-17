import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from "./pages/About";
import Signin from "./pages/Signin";
import SignOut from "./pages/SignOut";
import Home from "./pages/Home";
import Profile from "./pages/Profile.jsx";

function App() {
  

  return (
    <>
      
        <BrowserRouter >
        <Routes>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About/>}/>
       <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
       
        </BrowserRouter>
      
      
    </>
  )
}

export default App
