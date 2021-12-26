import { Route, Switch } from "react-router-dom";
import AboutScreen from "./screens/about/AboutScreen";
import ExperienceScreen from "./screens/experience/ExperienceScreen";
import HomeScreen from "./screens/home/HomeScreen";

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutScreen} />
      <Route path="/experience" component={ExperienceScreen} />
      <Route path="/" exact component={HomeScreen} />
    </Switch>
  );
};

export default Routes;
