import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryPage, HomePage } from "./pages";
import { NavBar } from "./components";
import { Question } from "./components/Question";
import { Result } from "postcss";

export const AppRouter = () => {
  return (
    <>
   
      <div className="cont">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/" element={<Question/>}></Route>
          <Route path="/" element={<Result/>}></Route>
        </Routes>
      </div>
    </>
  );
};
