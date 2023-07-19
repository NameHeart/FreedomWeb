import { NavbarWidgetStyled } from "./styled";
import { AvatarNavWidget } from "widgets";

const NavbarWidget = () => {
  return (
    <NavbarWidgetStyled>
      <div className="nav_user_infomation">
        <AvatarNavWidget />
      </div>
    </NavbarWidgetStyled>
  );
};

export default NavbarWidget;
