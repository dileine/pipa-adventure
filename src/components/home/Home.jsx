import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>PiPa: Pisos i Paranys</h1>
      <p>
        Una aventura de text fantàstica i satírica ambientada en la Barcelona
        actual.
      </p>
      <Link to='/start'>Començar</Link>
      {/*<button>Settings</button>
      <button>About</button>*/}
    </>
  );
};

export default Home;
