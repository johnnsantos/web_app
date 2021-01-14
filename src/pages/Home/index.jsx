import ContentTable from "../../components/ContentTable";
import Pagination from "../../components/Pagination";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <ContentTable />
      <Pagination />
    </Container>
  );
};

export default Home;
