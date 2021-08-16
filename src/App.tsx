import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutMob from "./components/layout/LayoutMob";
import Routes from "./components/routes";
import { DeviceContext } from "./context/deviceContext";
import { NavigationContext } from "./context/navigationContext";
import useWindowDimensions from "./hooks/useWindowDimentions";

function App() {
  const dimensions = useWindowDimensions();
  const device = dimensions.device;

  const [isSideNavOpen, setIsSideNavOpen] = useState(device !== "mobile");

  return (
    <DeviceContext.Provider value={dimensions}>
      <NavigationContext.Provider value={{ isOpen: isSideNavOpen, onOpen: setIsSideNavOpen }}>
        <BrowserRouter>{device === "mobile" ? <LayoutMob /> : <Routes />}</BrowserRouter>
      </NavigationContext.Provider>
    </DeviceContext.Provider>
  );
}

export default App;
