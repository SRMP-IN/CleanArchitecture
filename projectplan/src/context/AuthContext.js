import React, { createContext, useContext, useEffect, useState } from "react";
import { UserLogin } from "../data/User";
const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [pageLayout, setPageLayout] = useState(true);
  const value = { currentUser, pageLayout, loading, login };

  function login(userid, password) {
    if (UserLogin(userid, password)) {
      setCurrentUser("Admin");
      setPageLayout(false);
      return true;
    } else {
      setCurrentUser(null);
      setPageLayout(true);
      return false;
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
