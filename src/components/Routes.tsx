import { Route, Switch } from "react-router-dom";
import AboutScreen from "./screens/about/AboutScreen";
import HomeScreen from "./screens/home/HomeScreen";

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutScreen />
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
};

export default Routes;
