import React from "react";
import "./features/css/sidebarfolder.css";

function Sidebarfolder({ Icon, name }) {
  let isActive = false;
  return (
    <div className={`Sidebarfolder ${isActive && "Sidebarfolder--active"}`}>
      <Icon />
      <p>{name}</p>
    </div>
  );
}

export default Sidebarfolder;
