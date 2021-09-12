import React from "react";
import { PaginationRoot } from "./styled.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ pagination, setPagination, count }) => {
  return (
    <PaginationRoot>
      <button
        disabled={pagination.page === 1}
        onClick={() =>
          setPagination({ ...pagination, page: pagination.page - 1 })
        }
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <span className="page">{pagination.page}</span>
      <button
        disabled={pagination.page * pagination.limit >= count}
        onClick={() =>
          setPagination({ ...pagination, page: pagination.page + 1 })
        }
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </PaginationRoot>
  );
};

export default Pagination;
