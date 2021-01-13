import UndefinedAvatar from "../../img/undefined_avatar.png";
import { MainCard } from "./style";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UserCard = () => {
  const history = useHistory();
  const user = useSelector((state) => state.GetUser);
  const { id, name, age, email, address, phone, website, company } = user;
  console.log(user);
  return (
    <MainCard>
      <button onClick={() => history.push("/")}>
        <BiArrowBack />
        Voltar
      </button>
      <div className="header">
        <img src={UndefinedAvatar} alt="Avatar" />
        <span>
          {id} - {name}
        </span>
      </div>
      <div className="contents">
        <ul>
          <li>
            <AiOutlineFieldNumber />
            Idade: {age}
          </li>
          <li>
            <AiOutlineMail />
            E-mail: {email.toLowerCase()}
          </li>
          <li>
            <GrLocation />
            Cidade: {address.city}
          </li>
          <li>
            <AiOutlinePhone />
            Telefone: {phone}
          </li>
          <li>
            <FaInternetExplorer />
            Website: {website}
          </li>
          <li>
            <IoBusinessOutline />
            Empresa: {company.name}
          </li>
        </ul>
      </div>
    </MainCard>
  );
};

export default UserCard;
