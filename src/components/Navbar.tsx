import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  const Menu = () => {
    return (
      <ul className="nav__menu">
        <li>
          <Link className="nav__menu-link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__menu-link" href="/">
            Create Recipe
          </Link>
        </li>
        <li>
          <Link className="nav__menu-link" href="/">
            Discover
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <nav className="nav">
        <RestaurantMenuRoundedIcon
          style={{ fontSize: "2.5rem", color: "white" }}
          className="nav__icon"
        />
        {!toggleMenu ? (
          <MenuRoundedIcon
            onClick={handleToggleMenu}
            style={{ fontSize: "2.5rem", color: "white" }}
            className="nav__icon"
          />
        ) : (
          <ClearRoundedIcon
            onClick={handleToggleMenu}
            style={{ fontSize: "2.5rem", color: "white" }}
            className="nav__icon"
          />
        )}
      </nav>
      {toggleMenu ? <Menu /> : <></>}
    </>
  );
};

export default Navbar;
