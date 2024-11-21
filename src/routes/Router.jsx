import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import StartScreen from "../components/screens/StartScreen";
import GameScreen from "../components/screens/GameScreen";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/start' element={<StartScreen />} />
      <Route path='/pipa' element={<GameScreen />} />
    </Routes>
  );
};

export default Router;
