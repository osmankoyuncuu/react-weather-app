import NavbarContainer, {
  NavbarLink,
  NavbarLogo,
} from "../Styles/Navbar.styled";
import Logo from "../assets/weather-logo.gif";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarLogo src={Logo} alt="logo" onClick={() => navigate("/")} />
      <div>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="turkeymap">Turkey Map</NavbarLink>
        <NavbarLink to="citylist">City List</NavbarLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
