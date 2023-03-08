import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
const Navbar = () => {
  return (
    <nav className="nav">
      <RestaurantMenuRoundedIcon
        style={{ fontSize: "2.5rem", color: "white" }}
      />
      <MenuRoundedIcon style={{ fontSize: "2.5rem", color: "white" }} />
    </nav>
  );
};

export default Navbar;
