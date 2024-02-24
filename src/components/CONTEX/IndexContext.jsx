import { Header, Page } from "./Page";
import { UserProvider } from "./UserContext";

export default function IndexContext() {
  return (
    <div>
      <UserProvider>
        <Header />
        <Page />
      </UserProvider>
    </div>
  );
}
