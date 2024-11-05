import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import CiutatVella from "../components/levels/CiutatVella";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/pipa/CiutatVella' element={<CiutatVella />} />
    </Routes>
  );
};

export default Router;
