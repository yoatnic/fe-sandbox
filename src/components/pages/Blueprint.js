import React from "react";
import {
  Alignment,
  Navbar,
  Intent,
  Spinner,
  Card,
  Elevation,
  EditableText,
  ButtonGroup,
  AnchorButton,
  Button,
  Tab,
  Tabs
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
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
          </Navbar.Group>
        </Navbar>
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
        <Tabs id="TabsExample">
          <Tab id="ng" title="Angular" panel={<div>Angular</div>} />
          <Tab id="mb" title="Ember" panel={<div>Ember</div>} />
          <Tab id="rx" title="React" panel={<div>React</div>} />
          <Tab id="bb" disabled title="Backbone" panel={<div>Backbone</div>} />
        </Tabs>
        <ul className="bp3-breadcrumbs">
          <li>
            <a className="bp3-breadcrumbs-collapsed" href="#" />
          </li>
          <li>
            <a className="bp3-breadcrumb bp3-disabled">Folder one</a>
          </li>
          <li>
            <a className="bp3-breadcrumb" href="#">
              Folder two
            </a>
          </li>
          <li>
            <a className="bp3-breadcrumb" href="#">
              Folder three
            </a>
          </li>
          <li>
            <span className="bp3-breadcrumb bp3-breadcrumb-current">File</span>
          </li>
        </ul>
      </Example>
    </div>
  );
};

export default Blueprint;
