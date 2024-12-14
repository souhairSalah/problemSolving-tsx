"use client";
import { useState, useEffect } from "react";

interface Props {
  cartItems: String[];
  onClear: () => void ;
}
const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      {cartItems.map(item => (
        <li>{item}</li>
      ))}
   
    <button onClick={onClear} className="bg-white" >Clear</button>
    </div>
  );
};

export default Cart;

