import React from "react";
import { Button, Intent, Spinner } from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

const Blueprint = () => {
  return (
    <div>
      <Spinner intent={Intent.PRIMARY} />
      <Button intent={Intent.SUCCESS}>button</Button>
    </div>
  );
};

export default Blueprint;
