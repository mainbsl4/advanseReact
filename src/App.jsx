import { UserProvider, useUser } from "./components/CONTEX/UserContext";
import FeedbackForm from "./components/FeedbackForm";
import Forming from "./components/Forming";
import Listing from "./components/Listing";
import { useState, createContext, useContext } from "react";



export const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hallll");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Forming/>

      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 4 {user}</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

function App() {
  return (
    <>
      {/* <Listing /> */}
      {/* <FeedbackForm/> */}
      <Component1/>
    </>
  );
}

export default App;