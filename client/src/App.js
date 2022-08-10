import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import MyAds from "./components/MyAds/MyAds";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("userData");

    return userData ? JSON.parse(userData) : null;
  });

  function userLogin(userData) {
    setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("user data", userData);
  }

  function userLogout() {
    setUser(null);
    localStorage.removeItem("userData");
  }

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout }}>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-ads" element={<MyAds />} />
            <Route path="/details/:productId" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
