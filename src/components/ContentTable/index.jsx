import { useSelector } from "react-redux";
import { TableList } from "./style";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineFieldNumber,
  AiOutlineInteraction,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const ContentTable = () => {
  const [order, setOrder] = useState(false);
  const history = useHistory();
  const { db } = useSelector((state) => state.Users);

  const renderUsersList = (user, index) => {
    return (
      <ul key={index}>
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

  return (
    <>
      <TableList>
        <div className="list">
          <ul>
            <li onClick={() => setOrder(!order)} className="filter-btn">
              {order ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
              ID
            </li>
            <li>
              <BiUserCircle />
              Nome
            </li>
            <li>
              <BiUserCircle />
              Sobrenome
            </li>
            <li>
              <AiOutlineMail />
              Email
            </li>
            <li>
              <AiOutlineFieldNumber />
              Idade
            </li>
            <li>
              <AiOutlineInteraction />
              Ações
            </li>
          </ul>
          {order ? db.map(renderUsersList).reverse() : db.map(renderUsersList)}
        </div>
      </TableList>
    </>
  );
};

export default ContentTable;
