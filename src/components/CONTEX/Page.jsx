import { useUser } from "./UserContext";

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span>{user.name}</span>
    </p>
  );
};

export const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

export const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam
        perferendis esse animi iure possimus, alias ut nobis voluptate
        voluptatibus.
      </p>
      <p>Writen by <span>{user.name}</span></p>
    </div>
  );
};
