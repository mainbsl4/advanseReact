import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "main",
    email: "mainbsl4@gmail.com",
    dob: "11/12/2004",
  });

  return <UserContext.Provider value={{ user }}></UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
