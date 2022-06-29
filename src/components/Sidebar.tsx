import "../css/sidebar.css";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";


function Sidebar() {
    
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOptions Icon={HomeIcon} option="Home" />
      <SideBarOptions Icon={SearchIcon} option="Search" />
      <SideBarOptions Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
    </div>
  );
}

export default Sidebar;