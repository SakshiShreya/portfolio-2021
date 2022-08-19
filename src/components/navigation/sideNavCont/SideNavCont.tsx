import { useContext } from "react";
import { Link } from "react-router-dom";
import { DeviceContext } from "../../../context/DeviceContext";
import { NavigationContext } from "../../../context/NavigationContext";
import styles from "./SideNavCont.module.scss";

const links = [
  { title: "Home", link: "/" },
  { title: "About Me", link: "/about" },
  { title: "Experience", link: "/experience" },
  { title: "Contact me", link: "/contact" }
];

export interface SideNavContProps {}

const SideNavCont: React.FC<SideNavContProps> = props => {
  const { isOpen, onOpen } = useContext(NavigationContext);
  const { device } = useContext(DeviceContext);

  return (
    <nav className={[styles.drawer, isOpen ? styles.show : null].join(" ")}>
      {device === "desktop" && <img src={process.env.PUBLIC_URL + "/assets/logo/SSlogo.png"} className={styles.logo} alt="Logo" />}
      <ul>
        {links.map(link => (
          <li className={styles.li + " h4"} key={link.title}>
            <Link to={link.link} onClick={() => device !== "desktop" && onOpen(!isOpen)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavCont;
