import React from "react";
import Header from "../header/Header";

function Templaet({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Templaet;
