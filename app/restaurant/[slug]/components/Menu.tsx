import { Item } from "@prisma/client";
import React from "react";
import MenuCard from "./MenuCard";

export default function Menu({ menuItems }: { menuItems: Item[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menuItems.length
            ? menuItems.map((item) => <MenuCard key={item.id} item={item} />)
            : "This Restaurant did not provide a Menu"}
        </div>
      </div>
    </main>
  );
}
