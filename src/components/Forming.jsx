import { useContext, useState } from "react";
import { UserContext } from "../App";

export default function Forming() {
  const user = useContext(UserContext);
  const [name, setName] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("success");
  };

  const handelChenge = (e) => {
    setName(e.target.value);
  };
  console.log(name);
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handelChenge}
        />
      </div>
      <p>hi {user + user + user}</p>
      <button type="submit" disabled={!name}>
        Submit
      </button>
    </form>
  );
}
