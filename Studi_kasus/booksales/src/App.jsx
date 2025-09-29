import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index.jsx";
import Books from "./pages/books/index.jsx";
import Teams from "./pages/team/index.jsx";
import Contacts from "./pages/contact/index.jsx";
import Login from "./pages/auth/login/index.jsx";
import Register from "./pages/auth/register/index.jsx";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books/>}/>
            <Route path="team" element={<Teams/>}/>
            <Route path="contact" element={<Contacts/>}/>
            <Route path="login" element ={<Login/>}/>
            <Route path="register" element ={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
