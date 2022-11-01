import NavbarContainer, { NavbarLink } from "../Styles/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>LOGO</div>
      <div>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="turkeymap">Turkey Map</NavbarLink>
        <NavbarLink to="citylist">City List</NavbarLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
