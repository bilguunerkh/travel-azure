import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CssBaseline} from "@mui/material";
import  Home  from "./pages/Home";
import AuthPage from "./pages/Auth";


function App() {
  return (
    <Router>
      <CssBaseline/>

      <Routes>
        <Route path="/login" element={<AuthPage/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>

  );
}

export default App;