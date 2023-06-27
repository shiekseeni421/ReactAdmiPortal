import React from "react";
import "./index.scss";

function Navbar(props) {
  let { portalName, colorCode, textColor } = props;
  return (
    <div className="NavBar" style={{ background: colorCode, color: textColor }}>
      <h3>{portalName}</h3>
    </div>
  );
}

export default Navbar;
