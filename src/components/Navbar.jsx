import React from "react";

// import navigation data
import { navigationData } from "../data";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
