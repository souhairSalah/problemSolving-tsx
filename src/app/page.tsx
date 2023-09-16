"use client";
import Cart from "@/components/Cart.tsx";
import ExpandableText from "@/components/ExpandableText.tsx";
import Like from "@/components/Like.tsx";
import Navbar from "@/components/Navbar.tsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [cartItems, setcartItems] = useState(["product1", "product2"]);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>hello</div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint
        consequatur eum et at veniam odit placeat quo fugiat consectetur maiores
        alias similique voluptatum quisquam, sapiente, cupiditate, eveniet
        explicabo aperiam provident modi officia! Aspernatur velit quos, quia
        ipsa provident corporis at? Quam minima dolores nostrum dolor aliquam
        accusamus porro odit eos tenetur inventore culpa sunt, eligendi
        repellendus? Error culpa tempore et temporibus porro deleniti itaque
        veniam libero necessitatibus labore ea corrupti qui, voluptate,
        asperiores facilis quos fuga perferendis iure pariatur nemo. Officia
        saepe veniam tenetur, inventore repellendus odit deserunt, quas
        voluptate adipisci eligendi aspernatur dicta, praesentium quis dolor non
        cum?
      </ExpandableText>
      <Like />
      <Navbar cartItemcount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setcartItems([])} />
    </main>
  );
}
