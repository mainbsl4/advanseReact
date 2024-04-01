// import React, { useState } from "react";
// import Link from "./Link";
// import { FiMenu } from "react-icons/fi";
// import { ImCross } from "react-icons/im";
// export default function NavBar() {
//   const routes = [
//     { id: 1, path: "/", name: "Home" },
//     { id: 2, path: "/about", name: "About" },
//     { id: 3, path: "/contact", name: "Contact" },
//     { id: 4, path: "*", name: "Not Found" },
//   ];
//   const [open, setOpen] = useState(false);

//   const handelClick = () => {
//     setOpen(!open);
//   };

//   let allmenu, menuicon;
//   if (open) {
//     menuicon = <ImCross />;

//     allmenu = (
//       <ul>
//         {routes.map((routes) => (
//           <Link key={routes.id} route={routes}></Link>
//         ))}
//       </ul>
//     );
//   } else {
//     menuicon = <FiMenu />;

//   }

//   return (
//     <nav>
//       <div onClick={handelClick}>{menuicon}</div>
//       {allmenu}

//       {/* <ul>
//         {routes.map((routes)=>(
//           <Link key={routes.id} route={routes}></Link>
//         ))}
//       </ul> */}
//     </nav>
//   );
// }




// ==============================================



// import React, { useState } from 'react'

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <h1 className="logo">Your Logo</h1>
//         <button className="toggle-button" onClick={toggleNavbar}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </button>
//         <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
//           <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
//           <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   )
// }





// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// export  function NavBar1() {
//   return (
//     <nav className=' bg-slate-600'>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/friends">Friends</Link>
//           </li>
//           <li>
//             <Link to="/about/nextAbout">Next</Link>
//           </li>
//         </ul>
//         {/* <Outlet/> */}
//       </nav>
//   )
// }
// export  function NavBar2() {
//   return (
//     <nav className=' bg-red-400'>
//         <ul>
//           <li>
//             <Link to="/">H</Link>
//           </li>
//           <li>
//             <Link to="/about/nextAbout">A</Link>
//           </li>
//           <li>
//             <Link to="/friends/nextFriends">F</Link>
//           </li>
//         </ul>
//         {/* <Outlet/> */}
//       </nav>
//   )
// }
