import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

// eslint-disable-next-line react/prop-types
export const CommissionPagination = ({ handlePagination }) => {
  const [activePage, setActivePage] = useState(1);

  return (
    <Pagination size="2xl">
      <Pagination.Prev
        onClick={() => {
          if (activePage === 1) {
            return;
          }
          setActivePage((prevValue) => {
            handlePagination(prevValue - 1);
            return prevValue - 1;
          });
        }}
      />

      <Pagination.Item key={activePage} active>
        {activePage}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => {
          setActivePage((prevValue) => {
            handlePagination(prevValue + 1);
            return prevValue + 1;
          });
        }}
      />
    </Pagination>
  );
};
