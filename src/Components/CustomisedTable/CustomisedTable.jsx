import { Table } from "flowbite-react";

export const CustomisedTable = ({ count }) => {
  return (
    <Table striped bordered responsive hover>
      <Table.Head>
        <Table.HeadCell>First Name</Table.HeadCell>
        <Table.HeadCell>Last Name</Table.HeadCell>
        <Table.HeadCell>Username</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {[...Array(count).keys()].map((data) => (
          <Table.Row key={data}>
            <Table.Cell>Mark</Table.Cell>
            <Table.Cell>Otto</Table.Cell>
            <Table.Cell>@mdo</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
