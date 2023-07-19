import { Link } from "react-scroll";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "../NavItem";
import { NavbarStyled } from "./styled";

const Navbar = ({ data, image }) => {
  const [navActive, setNavActive] = useState(null);

  return (
    <NavbarStyled>
      <header>
        <nav className={`nav`}>
          <Link to="Home" style={{ cursor: "pointer" }} spy={true} smooth={true} duration={500} offset={50}>
            <Image className="image_nav" src={image} alt="image" />
          </Link>
          <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {data &&
              data.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}>
                  <NavItem {...menu} />
                </div>
              ))}
          </div>
        </nav>
      </header>
    </NavbarStyled>
  );
};

export default Navbar;
