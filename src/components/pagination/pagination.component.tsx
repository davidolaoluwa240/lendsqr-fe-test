// Modules
import React from "react";

// Components
import ReactPaginate from "react-paginate";
import { InputSelect } from "../";

// Models
import { IOptionType } from "../inputSelect/inputSelect.component";

// Style
import "./pagination.styles.scss";

// Interfaces
interface Props {
  className: string;
  paginationLimitOptions: IOptionType[];
  paginationLimit: number;
  setPaginationLimit: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  totalResult: unknown[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({
  className,
  paginationLimitOptions,
  paginationLimit,
  setPaginationLimit,
  totalPages,
  totalResult,
  hasPrevPage,
  hasNextPage,
  page,
  setPage,
}) => {
  return (
    <div className={`pagination ${className}`}>
      <div className="pagination__container">
        <div className="pagination__left">
          <p className="pagination__left-text">Showing</p>
          <InputSelect
            formGroupClass="pagination__limit-group"
            className="pagination__limit-control"
            options={paginationLimitOptions}
            name="pagination-limit"
            value={String(paginationLimit)}
            onChange={(e) => {
              setPaginationLimit(+e.target.value);
              setPage(1);
            }}
          />
          <p className="pagination__left-text">out of {totalResult.length}</p>
        </div>
        <div className="pagination__right">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(selectedItem) => setPage(selectedItem.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            forcePage={page - 1}
            previousLabel="<"
            pageClassName="react-paginate-list"
            breakClassName="react-paginate-break"
            activeClassName="react-paginate-list--active"
            containerClassName="react-paginate-container"
            nextLinkClassName="react-paginate-next-link"
            nextClassName={`react-paginate-next ${
              !hasNextPage ? "react-paginate-next--inactive" : ""
            }`}
            previousLinkClassName="react-paginate-prev-link"
            previousClassName={`react-paginate-prev ${
              !hasPrevPage ? "react-paginate-prev--inactive" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  className: "",
};

export default Pagination;
