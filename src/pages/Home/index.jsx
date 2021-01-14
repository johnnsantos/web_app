import ContentTable from "../../components/ContentTable";
import Pagination from "../../components/Pagination";
import { Container } from "./style";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <ContentTable />
        <Pagination />
      </Container>
    </motion.div>
  );
};

export default Home;
