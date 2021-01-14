import UserCard from "../../components/UserCard";
import { Container } from "./style.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { handleUserThunk } from "../../store/modules/requestUser/thunks";

const UserPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(handleUserThunk(id));
  }, []);

  return (
    <>
      <Container>
        <UserCard />
      </Container>
    </>
  );
};

export default UserPage;
