import React from "react";
import "./features/css/listfile.css";
import Listfilesetting from "./Listfilesetting";
import Listbody from "./Listbody";

function ListFile() {
  return (
    <div className="listfile">
      <Listfilesetting />
      <div className="flexing">
        <Listbody name="ravi" />
        <Listbody name="raveesh" />
        <Listbody name="raveesh" />
        <Listbody name="raveesh" />
        <Listbody name="raveesh" />
      </div>
    </div>
  );
}

export default ListFile;
