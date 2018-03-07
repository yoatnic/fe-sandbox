//@flow
import React from "react";
import InfinityScroll from "./components/pages/InfinityScroll";
import RenderProps from "./components/pages/RenderProps";
import { BrowserRouter, Route, Link } from "react-router-dom";

const AppIndex = () => {
  return (
    <div>
      <header>
        <h1>Index</h1>
      </header>
      <ul>
        <li>
          <Link to="/infinity-scroll">infinity scroll</Link>
        </li>
        <li>
          <Link to="/render-props">render props</Link>
        </li>
      </ul>
    </div>
  );
};

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={AppIndex} />
        <Route
          path="/infinity-scroll"
          render={() => <InfinityScroll {...props} />}
        />
        <Route path="/render-props" render={() => <RenderProps {...props} />} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
