import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, speed = 40 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reinicia el texto mostrado
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]); // Se reinicia cada vez que cambia el texto

  return <span>{displayed}</span>;
};

export default TypewriterText;
