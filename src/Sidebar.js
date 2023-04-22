import React from "react";
import "./features/css/sidebar.css";
import { Button } from "@material-ui/core";
import Sidebarfolder from "./Sidebarfolder";
import FolderIcon from "@material-ui/icons/Folder";
import { useDispatch } from "react-redux";
import { openCreateFolder } from "./mailslice";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import { useSelector } from "react-redux";
import { checkCreatefolderIsOpen } from "./mailslice";
import Foldercreate from "./Foldercreate";

function Sidebar() {
  const floders = ["f1", "f2", "f3"];
  const dispatch = useDispatch();
  const createfolder = useSelector(checkCreatefolderIsOpen);
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateNewFolderIcon />}
        className="compose__btn"
        onClick={() => {
          dispatch(openCreateFolder());
        }}
      >
        Create new folder
      </Button>
      {createfolder && <Foldercreate />}
      <div>
        {floders.map((el) => (
          <Sidebarfolder Icon={FolderIcon} name={el} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
