import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";

import Header from "./components/Header.jsx";
import SignUp from "./pages/SignUp.jsx";
import LandingPage from "./pages/LandingPage.jsx"



function App() {
  

  return (
    <>
    
    

      
        <BrowserRouter >
        <Header/>
        <Routes>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/home" element={<Home></Home>}/>
        
        <Route path="/" element={<LandingPage></LandingPage>}/>

        <Route path="/about" element={<About/>}/>
       
        </Routes>
       
        </BrowserRouter>
      
      
    </>
  )
}

export default App
