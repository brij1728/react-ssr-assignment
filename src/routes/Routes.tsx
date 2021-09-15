import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { AvengersPage } from "../pages/AvengersPage";
import { DetailsPage } from "../pages/DetailsPage";

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/tv-shows/avengers" />
          </Route>
          <Route path="/tv-shows/avengers">
            <AvengersPage />
          </Route>
          <Route path="/tv-shows/details/:id">
            <DetailsPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
