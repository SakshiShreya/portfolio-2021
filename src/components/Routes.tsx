import { Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
};

export default Routes;
