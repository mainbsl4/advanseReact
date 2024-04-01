import React from "react";
import Home from "../../componentForRouter/Home/Home";
import About from "../../componentForRouter/About/About";
import Friends from "../../componentForRouter/Friends/Friends";
import NotFound from "../../componentForRouter/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NextHome from "../../componentForRouter/next/NextHome";
import NextAbout from "./NextAbout";
import NextFriend from "./NextFriend";
// import { NavBar1, NavBar2 } from "../NavBar";
import Nav1 from "../Nav1";
import Nav2 from "../Nav2";

export default function AppRouter() {
  return (
    <div>
      {/* <Home/>
      <About/>
      <Friends/>
      <NotFound/> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar1 />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="friends" element={<Friends />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path='next' element={<NavBar2 />}>
          <Route path="/about/nextAbout" element={<NextAbout />} />
          <Route path="/friends/nextFriends" element={<NextFriend />} />
        </Route>
      </Routes>
    </BrowserRouter>  */}

      <BrowserRouter>
        <Routes>
          <Route element={<Nav1 />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<Nav2 />}>
            <Route path="/about/nextAbout" element={<NextAbout />} />
            <Route path="/friends/nextFriends" element={<NextFriend />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
