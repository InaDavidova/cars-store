import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("userData");

    return userData ? JSON.parse(userData) : null;
  });

  function userLogin(userData) {
    setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  function userLogout() {
    setUser(null);
    localStorage.removeItem("userData");
  }

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
