import { useSelector } from "react-redux";
import { useState } from "react";
import { TableList } from "./style";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineFieldNumber,
  AiOutlineInteraction,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import UserList from "../UserList";

const ContentTable = () => {
  const [order, setOrder] = useState(false);

  const db = useSelector((state) => state.Users);

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
          {order
            ? db
                .map((user, index) => <UserList user={user} key={index} />)
                .reverse()
            : db.map((user, index) => <UserList user={user} key={index} />)}
        </div>
      </TableList>
    </>
  );
};

export default ContentTable;
