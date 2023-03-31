import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const fetchCurrentUser = (userId) => {
  return fetch(`http://localhost:8080/api/users/${userId}`).then((res) =>
    res.json()
  );
};

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    fetchCurrentUser(localStorage.getItem("userLoggedIn")).then((user) =>
      setCurrentUser(user)
    );
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, setCurrentUser, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
