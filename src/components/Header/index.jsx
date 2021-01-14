import { HeaderContainer, TitleBar } from "./style";
import { ImUsers } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <TitleBar>
        <Link to="/">
          <ImUsers />
          UsersList
        </Link>
      </TitleBar>
    </HeaderContainer>
  );
};

export default Header;
