import IndexContext from "./components/CONTEX/IndexContext";
import { UserProvider } from "./components/CONTEX/UserContext";
import FeedbackForm from "./components/FeedbackForm";
import Forming from "./components/Forming";
import Listing from "./components/Listing";

function App() {
  return (
    <>
      {/* <Listing /> */}
      {/* <Forming/> */}
      {/* <FeedbackForm/> */}
      {/* <UserProvider> */}
        <IndexContext />
      {/* </UserProvider> */}
    </>
  );
}
export default App;