import { Routes, Route } from "react-router-dom";
import "./App.css";
import RouteGuard from "./components/common/RouteGuard";
import CrerateAd from "./components/CrerateAd/CrerateAd";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import MyAds from "./components/MyAds/MyAds";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route element={<RouteGuard />}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/my-ads" element={<MyAds />} />
              <Route path="/create" element={<CrerateAd />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:productId" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
