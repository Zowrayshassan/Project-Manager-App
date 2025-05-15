import React, { createContext,useState,useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState();

  useEffect(() => {
    setLocalStorage()
    const {employees,admin} = getLocalStorage()
    setuserData({employees,admin})

  },[]);
  return (

    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
