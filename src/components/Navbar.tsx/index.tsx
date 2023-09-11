"use client";
import { useState, useEffect } from "react";

interface Props {
  cartItemcount : number;
}
const Navbar = ({cartItemcount}: Props) => {

  return (
    <div> navbar : {cartItemcount} </div>
  );
};

export default Navbar;
