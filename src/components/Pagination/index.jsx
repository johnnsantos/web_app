import { Commander } from "./style";
import { useDispatch } from "react-redux";
import { handleUsersThunk } from "../../store/modules/infoUsers/thunks";
import { handlePageThunk } from "../../store/modules/pagination/thunks";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Pagination = () => {
  const page = useSelector((state) => state.getPage);

  const dispatch = useDispatch();

  const nextPage = () => {
    if (page < 4) {
      dispatch(handlePageThunk(+1));
    }
  };

  const prevPage = () => {
    if (page > 1) {
      dispatch(handlePageThunk(-1));
    }
  };

  useEffect(() => {
    dispatch(handleUsersThunk(page));
  }, [page]);

  return (
    <>
      <Commander>
        <button onClick={prevPage} className={`${page === 1 && `disable`}`}>
          Página anterior
        </button>
        <button onClick={nextPage} className={`${page === 4 && `disable`}`}>
          Próxima página
        </button>
      </Commander>
    </>
  );
};

export default Pagination;
