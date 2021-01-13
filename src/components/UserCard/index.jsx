import UndefinedAvatar from "../../img/undefined_avatar.png";
import { MainCard } from "./style";

const UserCard = (props) => {
  const {
    id,
    name,
    username,
    age,
    email,
    adress,
    phone,
    website,
    company,
  } = props;
  return (
    <MainCard>
      <div className="header">
        <img src={UndefinedAvatar} alt="Avatar" />
        <span>ID - Nome Sobrenome</span>
      </div>
      <div className="contents">
        <ul>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </div>
    </MainCard>
  );
};

export default UserCard;
