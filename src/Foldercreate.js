import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./features/css/foldercreate.css";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeCreateFolder } from "./mailslice";
// import { db } from "./firebase";

function Foldercreate() {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    if (to) {
      console.log(to);
      // db;
    }
  };
  return (
    <div className="foldercreate">
      <div className="folder-header">
        <p>New folder</p>
        <IconButton
          onClick={() => {
            dispatch(closeCreateFolder());
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <form onSubmit={formSubmit}>
        <div className="folder-body">
          <input
            placeholder="Folder name"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          ></input>
        </div>
        <div className="folder-foter">
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  );
}

export default Foldercreate;
