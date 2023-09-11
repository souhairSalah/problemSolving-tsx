"use client";
import Cart from "@/components/Cart.tsx";
import Like from "@/components/Like.tsx";
import Navbar from "@/components/Navbar.tsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [cartItems, setcartItems] = useState(["product1", "product2"]);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>hello div app</div>
      <Like />
      <Navbar cartItemcount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={()=>setcartItems([])}/>
    </main>
  );
}
