import { Link } from "react-scroll";

const NavItem = ({ text, to, active }) => {
  return (
    <Link className="link" to={to} style={{ cursor: "pointer" }} spy={true} smooth={true} duration={500} offset={50}>
      {text}
    </Link>
  );
};

export default NavItem;
