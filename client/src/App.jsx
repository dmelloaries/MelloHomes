import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";
import ProfileSec from "./pages/ProfileSec.jsx";
import Header from "./components/Header.jsx";
import SignUp from "./pages/SignUp.jsx";



function App() {
  

  return (
    <>
    
    

      
        <BrowserRouter >
        <Header/>
        <Routes>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/profile" element={<ProfileSec/>}/>

        <Route path="/about" element={<About/>}/>
       
        </Routes>
       
        </BrowserRouter>
      
      
    </>
  )
}

export default App
