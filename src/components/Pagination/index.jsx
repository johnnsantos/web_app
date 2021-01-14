/* eslint-disable react-hooks/exhaustive-deps */
import { Commander } from "./style";
import { useDispatch } from "react-redux";
import { handleUsersThunk } from "../../store/modules/infoUsers/thunks";
import { handlePageThunk } from "../../store/modules/pagination/thunks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Pagination = () => {
  const page = useSelector((state) => state.GetPage);

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
          <FaArrowCircleLeft />
          Página anterior
        </button>
        <button onClick={nextPage} className={`${page === 4 && `disable`}`}>
          Próxima página
          <FaArrowCircleRight />
        </button>
      </Commander>
    </>
  );
};

export default Pagination;
