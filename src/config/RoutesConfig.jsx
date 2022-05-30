import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const RoutesConfig = () => {
  const Catalog = React.lazy(() => import("../pages/Catalog"));
  const Home = React.lazy(() => import("../pages/Home"));
  const Detail = React.lazy(() => import("../pages/detail/Detail"));
  return (
    <Switch>
      <Suspense fallback={<h1>Loading data....</h1>}>
        <Route path="/:category/:id" component={Detail} />
        <Route path="/:movieType" component={Catalog} />
        <Route path="/" exact component={Home} />
      </Suspense>
    </Switch>
  );
};

export default RoutesConfig;
