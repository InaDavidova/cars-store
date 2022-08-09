import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  function userLogin(userData){
    setUser(userData);
    console.log("user data", userData);
  }

  function userLogout(){
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{user, userLogin, userLogout}}>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:productId" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
