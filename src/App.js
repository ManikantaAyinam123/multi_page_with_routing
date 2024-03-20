import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Catagories from "./pages/Catagories";
import Cart from "./pages/Cart";
import Account from './pages/Account'


function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Catagories" element={<Catagories/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Account" element={<Account/>}/>
         </Routes>
        </BrowserRouter>
     


    </div>
  );
}

export default App;
