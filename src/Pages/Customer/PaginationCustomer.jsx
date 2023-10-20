import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { render } from "react-dom";

const PaginationCustomer = ({ pageSelect }) => {
  // let active = 1;
  let items = [];

  const [active, setActive] = useState(1);
  // const [pagelimit, setPageLimit] = useState({
  //   start: 1,
  //   end: 5,
  // });
  function setPagination(number) {
    pageSelect(number);
    setActive(number);
  }
  // function setPaginationLimit() {
  //   setPageLimit({
  //     start: pagelimit.end + 1,
  //     end: pagelimit.end + 5,
  //   });
  // }

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setPagination(number)}
      >
        {number}
      </Pagination.Item>
    );
    if (number == 5) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          next
        </Pagination.Item>
      );
    }
  }

  const paginationBasic = (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
  return paginationBasic;
};

export default PaginationCustomer;
