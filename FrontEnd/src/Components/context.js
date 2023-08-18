import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [IsLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('IsLoggedIn') || false);
  const [IsAdmin, setIsAdmin] = useState(localStorage.getItem('IsAdmin') === 'true' || false);
  const [UserName, setUserName] = useState(localStorage.getItem('UserName') || '');
  const [UserId, setUserId] = useState(localStorage.getItem('UserId') || '');

  
  useEffect(() => {
    // Set a timeout to remove IsLoggedIn after 2 hours
    const IsLoggedInTimeout = setTimeout(() => {
      localStorage.removeItem('IsLoggedIn');
    }, 60000 * 60 * 2);

    // Set a timeout to remove IsAdmin after 2 hours
    const IsAdminTimeout = setTimeout(() => {
      localStorage.removeItem('IsAdmin');
    }, 60000 * 60 * 2);

    // Set a timeout to remove UserName after 2 hours
    const UserNameTimeout = setTimeout(() => {
      localStorage.removeItem('UserName');
    }, 60000 * 60 * 2);

    // Set a timeout to remove UserId after 2 hours
    const UserIdTimeout = setTimeout(() => {
      localStorage.removeItem('UserId');
    }, 60000 * 60 * 2);

    // Store the timeouts so they can be cleared when the component unmounts
    return () => {
      clearTimeout(IsLoggedInTimeout);
      clearTimeout(IsAdminTimeout);
      clearTimeout(UserNameTimeout);
      clearTimeout(UserIdTimeout);
    }
  }, []);
 

  return (
    <AppContext.Provider value={{ IsLoggedIn, setIsLoggedIn, IsAdmin, setIsAdmin, UserName, setUserName, UserId, setUserId }}>
      {children}
    </AppContext.Provider>
  );
};
