import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>
        Benvingut a <strong>PiPa: Pisos i Paranys</strong>
      </h1>
      <p>
        Una aventura de text fantàstica i satírica ambientada en la Barcelona
        actual. Abans de començar, les presentacions:
      </p>

      <Link to='/start'>Començar</Link>
      {/*TO DO:
      <button>Settings</button>
      <button>About</button>*/}
    </>
  );
};

export default Home;
