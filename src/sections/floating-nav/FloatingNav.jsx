import data from "./data";
import Nav from "./Nav";
import "./floating-nav.css";
import Scrollspy from "react-scrollspy";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-400}
        className="scrollspy"
        items={["header", "about", "Exp", "project", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
