import React from "react";
import { Link } from "react-router-dom"

export const NavBar = () => {
    
  return (
    <header className=" py-5 flex justify-center">
        <Link to = '/'>
            <h1 className="text-white text-2x1 font-titulo text-6xl hover:scale-110">Play Ask</h1>
        </Link>
    </header>
  );
};