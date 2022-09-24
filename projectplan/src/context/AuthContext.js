import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [pageLayout, setPageLayout] = useState(true)
  const value = [currentUser,pageLayout,loading];
 
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );


  
}
