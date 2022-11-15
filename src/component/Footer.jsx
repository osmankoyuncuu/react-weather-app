import React from "react";
import FixDiv from "../Styles/FixDiv.styled";
import FooterContainer, {
  FooterIcon,
  FooterIconLinkedin,
} from "../Styles/Footer.styled";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div>
          <FooterIcon href="https://github.com/osmankoyuncuu" target="_blank">
            <BsGithub />
          </FooterIcon>
          <FooterIconLinkedin
            href="https://www.linkedin.com/in/osman-koyuncu/"
            target="_blank"
          >
            <BsLinkedin />
          </FooterIconLinkedin>
        </div>
        © {new Date().getFullYear()} Osman
      </FooterContainer>
      <FixDiv />)
    </>
  );
};

export default Footer;
