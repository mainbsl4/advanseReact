import RootContext from "./components/CONTEX/RootContext";
import FeedbackForm from "./components/FeedbackForm";
import Forming from "./components/Forming";
import Listing from "./components/Listing";
import "./App.css";
import UseEffectHooks from "./components/Hooks/UseEffectHooks";
import WWTime from "./components/timeZone/WWTime";
import UseReducerHooks from "./components/Hooks/UseReducerHooks";
import NavBar from "./components/router/NavBar";
import NewsApi from "./components/api/NewsApi";

// function Component1() {

//   return (

//   );
// }

function App() {
  return (
    <>
      {/* <Listing /> */}
      {/* <FeedbackForm/> */}
      {/* <RootContext /> */}
      {/* <UseEffectHooks/> */}
      {/* <WWTime/> */}
      {/* <UseReducerHooks/> */}
      <NavBar />
      <NewsApi />
    </>
  );
}

export default App;
