import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>PiPa: Pisos i Paranys</h1>
      <Link to='/pipa'>Start</Link>
      <button>Settings</button>
      <button>About</button>
    </>
  );
};

export default Home;
