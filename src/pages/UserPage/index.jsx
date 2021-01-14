/* eslint-disable react-hooks/exhaustive-deps */
import UserCard from "../../components/UserCard";
import { Container } from "./style.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { handleUserThunk } from "../../store/modules/requestUser/thunks";
import { motion } from "framer-motion";

const UserPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(handleUserThunk(id));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <UserCard />
      </Container>
    </motion.div>
  );
};

export default UserPage;
