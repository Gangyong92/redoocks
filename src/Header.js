import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <header>
      <a href="#">Home</a> Hello, {context.name}!
    </header>
  );
};

export default Header;
