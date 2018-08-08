import React from "react";
import {
  Intent,
  Spinner,
  Card,
  Elevation,
  EditableText,
  ButtonGroup,
  AnchorButton,
  Button
} from "@blueprintjs/core";
import { Table, Column, Cell } from "@blueprintjs/table";
import { DatePicker } from "@blueprintjs/datetime";
import { Example } from "@blueprintjs/docs-theme";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/table/lib/css/table.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/docs-theme/lib/css/docs-theme.css";

const Blueprint = () => {
  const cellRenderer = (rowIndex: number) => {
    return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
  };
  return (
    <div>
      <Example options={false} showOptionsBelowExample={true}>
        <Spinner intent={Intent.PRIMARY} />
        <Button intent={Intent.SUCCESS}>button</Button>
        <Table numRows={10}>
          <Column name="Dollars" cellRenderer={cellRenderer} />
        </Table>
        <DatePicker />
        <Card interactive={true} elevation={Elevation.TWO}>
          <h5>
            <a href="#">Card heading</a>
          </h5>
          <p>Card content</p>
          <Button>Submit</Button>
        </Card>
        <EditableText multiline={true} minLines={3} maxLines={12} />
        <ButtonGroup minimal={true}>
          <Button icon="database">Queries</Button>
          <Button icon="function">Functions</Button>
          <AnchorButton rightIcon="caret-down">Options</AnchorButton>
        </ButtonGroup>
      </Example>
    </div>
  );
};

export default Blueprint;
