import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homelist from "./pages/homelist";
import Event from "./pages/event";
import Createvent from "./pages/createvent";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Header from "./component/header";

export default function App() {
  return <BrowserRouter>
      <Header/>
       <Routes>
        <Route  path="/" element={<Homelist/>}/>
        <Route  path="/event" element={<Event/>}/>
        <Route  path="/create" element={<Createvent/>}/>
        <Route  path="/sign-in" element={<Signin/>}/>
        <Route  path="/sign-up" element={<Signup/>}/>
       
       </Routes>

    </BrowserRouter>;
  
}
