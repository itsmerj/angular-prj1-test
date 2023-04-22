import testcase from "./test.json";
import React from "react";
import "./features/css/listfile.css";
import Listfilesetting from "./Listfilesetting";
import Listbody from "./Listbody";

let cases = testcase;
function ListFile() {
  function prin(e) {
    alert();
  }
  return (
    <div className="listfile">
      <Listfilesetting />
      <div className="flexing">
        {cases.map((e, i) => (
          <Listbody name={e} ind={i} onClick={prin} />
        ))}
      </div>
    </div>
  );
}

export default ListFile;
