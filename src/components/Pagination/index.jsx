import { Commander } from "./style";
import { useDispatch } from "react-redux";
import { handleUsersThunk } from "../../store/modules/infoUsers/thunks";
import { useState, useEffect } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const prevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextClick = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(handleUsersThunk(page));
    console.log(page);
  }, [page]);

  return (
    <>
      <Commander>
        <button onClick={prevClick}>Página anterior</button>
        <button onClick={nextClick}>Próxima página</button>
      </Commander>
    </>
  );
};

export default Pagination;
