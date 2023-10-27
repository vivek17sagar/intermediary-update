import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

export const PaginationBasic = ({ handlePaginationBehaviour, page }) => {
  return (
    <Pagination size="2xl">
      <Pagination.Prev
        onClick={() => {
          if (page === 1) {
            return;
          }
          handlePaginationBehaviour(page - 1);
        }}
      />

      <Pagination.Item key={page} active>
        {page}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => {
          handlePaginationBehaviour(page + 1);
        }}
      />
    </Pagination>
  );
};
