import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";

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
        <li className="nav__li">
          <Link onClick={handleToggleMenu} className="nav__menu-link" href="/">
            <SegmentRoundedIcon style={{ fontSize: "2rem" }} />
            My Recipes
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={handleToggleMenu}
            className="nav__menu-link"
            href="/add"
          >
            <AddCircleOutlineRoundedIcon style={{ fontSize: "2rem" }} />
            Add Recipe
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={handleToggleMenu}
            className="nav__menu-link"
            href="/discover"
          >
            <SearchRoundedIcon style={{ fontSize: "2rem" }} />
            Find Recipes
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <nav className="nav">
        <RestaurantMenuRoundedIcon
          style={{ fontSize: "3rem", color: "white" }}
          className="nav__icon"
        />
        {!toggleMenu ? (
          <MenuRoundedIcon
            onClick={handleToggleMenu}
            style={{ fontSize: "3rem", color: "white" }}
            className="nav__icon"
          />
        ) : (
          <ClearRoundedIcon
            onClick={handleToggleMenu}
            style={{ fontSize: "3rem", color: "white" }}
            className="nav__icon"
          />
        )}
      </nav>
      {toggleMenu ? <Menu /> : <></>}
    </>
  );
};

export default Navbar;
