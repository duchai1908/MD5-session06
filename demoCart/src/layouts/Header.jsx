import React from "react";
import ListCart from "../components/ListCart";

export default function Header() {
  return (
    <>
      <header className="flex justify-evenly items-center">
        <h1>Icon</h1>
        <div className="flex gap-5">
          <a href="#">Woman</a>
          <a href="#">Men</a>
          <a href="#">Kids</a>
          <a href="#">Essentitals</a>
          <a href="#">Collaboration</a>
          <a href="#">Ranking</a>
          <a href="#">日本語</a>
        </div>
        <div className="flex gap-5">
          {/* search icon */}
          <a href="#">My Page</a>
          <a href="#">Cart</a>
          <ListCart />
        </div>
      </header>
    </>
  );
}
