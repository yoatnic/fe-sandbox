import React from "react";
import { Button, Intent, Spinner } from "@blueprintjs/core";
import { Table, Column, Cell } from "@blueprintjs/table";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

const Blueprint = () => {
  const cellRenderer = (rowIndex: number) => {
    return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
  };
  return (
    <div>
      <Spinner intent={Intent.PRIMARY} />
      <Button intent={Intent.SUCCESS}>button</Button>
      <Table numRows={10}>
        <Column name="Dollars" cellRenderer={cellRenderer} />
      </Table>
    </div>
  );
};

export default Blueprint;
