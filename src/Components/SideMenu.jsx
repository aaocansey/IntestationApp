import React from "react";
import { Link } from "react-router-dom";
import "../pages/App Portal/css/sideMenu.css";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const SideMenu = () => {
  return (
    <div className="sideMenu">
      <MenuOutlinedIcon style={{ color: "white", margin: '1rem'}} />
      <nav>
        <div className="navlink">
          <Link id="link" className={"link-styles"}>
            <DashboardSharpIcon style={{ color: "white", height: '15px' }} />
            <span>
              Dashboard
              </span>
          </Link>
        </div>
        <div className="navlink">
          <Link className={"link-styles"}>
            <AddCircleOutlineOutlinedIcon style={{ color: "white", height: '15px' }} />
            <span>New Application</span> 
          </Link>
        </div>
        <div className="navlink">
          <Link className={"link-styles"}>
            <DescriptionOutlinedIcon style={{ color: "white", height: '15px' }} />
            <span>Current Application</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;
