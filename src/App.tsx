import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutMob from "./components/layout/LayoutMob";
import Routes from "./components/routes";
import { DeviceContext } from "./context/deviceContext";
import useWindowDimensions from "./hooks/useWindowDimentions";

function App() {
  const dimensions = useWindowDimensions();
  const device = dimensions.device;

  return (
    <DeviceContext.Provider value={dimensions}>
      <BrowserRouter>{device === "mobile" ? <LayoutMob /> : <Routes />}</BrowserRouter>
    </DeviceContext.Provider>
  );
}

export default App;
