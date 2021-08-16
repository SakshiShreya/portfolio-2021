import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutDsk from "./components/layout/layoutDsk";
import LayoutMob from "./components/layout/LayoutMob";
import { DeviceContext } from "./context/deviceContext";
import { NavigationContext } from "./context/navigationContext";
import useWindowDimensions from "./hooks/useWindowDimentions";

function App() {
  const dimensions = useWindowDimensions();
  const device = dimensions.device;

  // set initial value of isSideNavOpen to true if it is desktop and false if mobile
  const [isSideNavOpen, setIsSideNavOpen] = useState(device === "desktop");

  // change the state if device changes
  useEffect(() => {
    setIsSideNavOpen(device === "desktop");
  }, [device]);

  return (
    <DeviceContext.Provider value={dimensions}>
      <NavigationContext.Provider value={{ isOpen: isSideNavOpen, onOpen: setIsSideNavOpen }}>
        <BrowserRouter>{device !== "desktop" ? <LayoutMob /> : <LayoutDsk />}</BrowserRouter>
      </NavigationContext.Provider>
    </DeviceContext.Provider>
  );
}

export default App;
