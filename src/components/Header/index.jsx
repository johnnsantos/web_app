import { HeaderContainer, TitleBar } from "./style";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <TitleBar>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </TitleBar>
    </HeaderContainer>
  );
};

export default Header;
