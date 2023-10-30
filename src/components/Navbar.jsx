import React from "react";
import { Link } from "react-router-dom"

export const NavBar = () => {
    
  return (
    <header className=" py-0  flex justify-center">
        <Link to = '/'>
            <p className="titulo text-2x1 mt-4 font-titulo text-6xl duration-200">Play Ask</p>
        </Link>
    </header>
  );
};