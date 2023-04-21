import React from "react";
import "./features/css/header.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon></ReorderIcon>
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="logo"
        ></img>
      </div>
      <div className="header__middle">
        <div className="searchbar">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <TuneIcon></TuneIcon>
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpIcon></HelpIcon>
        </IconButton>
        <IconButton>
          <SettingsIcon></SettingsIcon>
        </IconButton>
        <IconButton>
          <AppsSharpIcon></AppsSharpIcon>
        </IconButton>
        <Avatar
          alt="ravee"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pRQmhxAnv9gU2HCi2FgFg80GMDHEYlYVPQ&usqp=CAU"
        ></Avatar>
      </div>
    </div>
  );
};

export default Header;
