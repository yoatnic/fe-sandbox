//@flow
import React from "react";
import InfinityScroll from "./components/pages/InfinityScroll";
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
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
