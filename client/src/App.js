import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthGuard from "./guards/AuthGuard";
import IsOwnerGuard from "./guards/IsOwnerGuard";
import CreateAd from "./components/CreateAd/CreateAd";
import Details from "./components/Details/Details";
import EditAd from "./components/EditAd/EditAd";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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

        <main className="main">
          <Routes>
            <Route element={<AuthGuard />}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/my-ads" element={<MyAds />} />
              <Route path="/create" element={<CreateAd />} />
              <Route element={<IsOwnerGuard />}>
                <Route path="/edit/:productId" element={<EditAd />} />
              </Route>
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:productId" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
