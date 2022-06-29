import "../css/sidebarOptions.css";
import { useNavigate } from "react-router-dom";
function SideBarOptions({ option = "test", Icon} : { option: string, Icon: any}) {
    const history = useNavigate();  
  return (
    <div className="sidebarOption" onClick={() => history('/')}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SideBarOptions;