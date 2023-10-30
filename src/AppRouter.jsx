import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage, HomePage } from "./pages";
import { NavBar } from "./components";

export const AppRouter = () => {
  return (
    <>
   
      <div className="cont">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </>
  );
};
