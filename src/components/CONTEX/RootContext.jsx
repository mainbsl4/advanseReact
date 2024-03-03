// import { createContext, useContext, useState } from "react";

// const UserContext = createContext(undefined);

// export const UserProvider = ({ children }) => {
//   const [user] = useState({
//     name: "main",
//     email: "mainbsl4@gmail.com",
//     dob: "11/12/2004",
//   });

//   return <UserContext.Provider value={{ user }}></UserContext.Provider>;
// };

// export const useUser = () => useContext(UserContext);

import { useState, createContext, useContext } from "react";
import Forming from "../Forming";
import TabsIndex from "../Tabs/TabsIndex";
import MainHooks from "../AdvanceHooks/MainHooks";

export const UserContext = createContext();

//when will i call in any component{
//  const user = useContext(UserContext);
//} 

export default function RootContext() {
  const [user, setUser] = useState("Jesse Hallll");
  return (
    <UserContext.Provider value={user}>
    <h1>{`Hello ${user}!`}</h1>
    {/* <Forming/> */}
    {/* <TabsIndex/> */} 
    <MainHooks/>
  </UserContext.Provider>
  )
}
