import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";

const UserList = ({ user }) => {
  const history = useHistory();
  return (
    <ul>
      <li data-label="ID">{user.id}</li>
      <li data-label="Nome">{user.name.split(" ")[0]}</li>
      <li data-label="Sobrenome">{user.name.split(" ")[1]}</li>
      <li data-label="E-mail">{user.email.toLowerCase()}</li>
      <li data-label="Idade">{user.age}</li>
      <li data-label="Ações">
        <button onClick={() => history.push(`/user/${user.id}`)}>
          Ver tudo
          <IoIosArrowDroprightCircle />
        </button>
      </li>
    </ul>
  );
};

export default UserList;
