import { useSelector } from "react-redux";
import { StyledTable, Container } from "./style";
import { MdFormatListNumbered } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { AiOutlineInteraction } from "react-icons/ai";

const ContentTable = () => {
  const { db } = useSelector((state) => state.Users);

  const renderUsers = (user, index) => {
    return (
      <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name.split(" ")[0]}</td>
        <td>{user.name.split(" ")[1]}</td>
        <td>{user.email.toLowerCase()}</td>
        <td>{user.age}</td>
        <td>
          <button>
            Ver mais
            <IoIosArrowDroprightCircle />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <Container>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <MdFormatListNumbered />
              ID
            </th>
            <th>
              <BiUserCircle />
              Nome
            </th>
            <th>
              <BiUserCircle />
              Sobrenome
            </th>
            <th>
              <AiOutlineMail />
              Email
            </th>
            <th>
              <AiOutlineFieldNumber />
              Idade
            </th>
            <th>
              <AiOutlineInteraction />
              Ações
            </th>
          </tr>
        </thead>
        <tbody>{db.map(renderUsers)}</tbody>
      </StyledTable>
    </Container>
  );
};

export default ContentTable;
