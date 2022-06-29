import React, { KeyboardEvent } from "react";
import "../css/header.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

type Props = {
    search: boolean
    clickHandler?: (e: KeyboardEvent ) => void
}
function Header({ search, clickHandler } : Props) {
    
  return (
    <div className="header">
      { search ? <div className="header__left"> <SearchIcon /> <input onKeyDown={(e) => clickHandler?.(e)} placeholder="Search for Artists, Songs, or Podcasts " type="text" /> </div> : ''}
      <div className="header__right">
        
      </div>
    </div>
  );
}

export default Header;