import React, { useState } from "react";

export default function Forming() {
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
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handelChenge}
        />
      </div>
      <button type="submit" disabled={!name}>
        Submit
      </button>
    </form>
  );
}
