import React, { useEffect, useState } from 'react';

export default function BrowserTabNameChenger() {
  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  let content;
  if (toggle === false) {
    content = <p>This is a toggle</p>;
  } else {
    content = <p>go</p>;
  }

  useEffect(()=>{
    if(toggle === false){
      document.title = "This is a toggle";
    }else{
      document.title = "Home";
    }
  },[toggle]);

  return (
    <div>
      <h2>UseEffect()</h2>
      <button onClick={clickHandler}>ToggleButton</button>
      {content}
    </div>
  );
}