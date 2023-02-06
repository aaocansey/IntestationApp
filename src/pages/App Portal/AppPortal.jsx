import { React, useState } from "react";
import CreateApp from "./CreateApp";
import PortalForm from "../../Components/PortalForm";
import PortalNav from "../../Components/PortalNav";
// import SideMenu from "../../Components/SideMenu";
import "../App Portal/css/appPortal.css";
import "../App Portal/css/sideMenu.css";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const AppPortal = () => {
  let [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    applications: [
      {
        appID: "567780",
        title: "Mr",
        surname: "Ocansey",
        otherNames: "Albert Ahuma",
        dob: "",
        primaryContact: "",
        secondaryContact: "",
        appType: "Attestation",
        program: "",
        level: "",
        admissionYear: "",
        completionYear: "",
        programDuration: "",
        startDate:'01-02-2023', 
        endDate:'02-03-2024',
        embassyName: "Canada",
        otherDetails: "",
      },
      {
        appID: "458891",
        title: "Mr",
        surname: "Tachie",
        otherNames: "Joseph Amartey",
        dob: "",
        primaryContact: "",
        secondaryContact: "",
        appType: "Introductory",
        program: "",
        level: "",
        admissionYear: "",
        completionYear: "",
        programDuration: "",
        startDate:'01-02-2034', 
        endDate:'05-08-2045',
        embassyName: "USA",
        otherDetails: "",
      },
      {
        appID: "234560",
        title: "Mr",
        surname: "Kwao",
        otherNames: "Allan",
        dob: "",
        primaryContact: "",
        secondaryContact: "",
        appType: "Attestation",
        program: "",
        level: "",
        admissionYear: "",
        completionYear: "",
        programDuration: "",
        startDate: "05-06-2056",
        endDate: "08-09-2067",
        embassyName: "China",
        otherDetails: "",
      },
    ],
  });

  const addData = (newData) => {
    newData.appID = Math.floor(Math.random() * 1000000).toString();
    setFormData({ applications: [...formData.applications, newData] });
    console.log(formData);
  };

  const pageDisplay = () => {
    if (page === 1) {
      return null;
    } else if (page === 2) {
      return (
        <PortalForm
          formData={formData}
          setFormData={setFormData}
          addData={addData}
        />
      );
    } else if (page === 3) {
      return <CreateApp formData={formData} />;
    } else {
      return null;
    }
  };

  return (
    <div>
      <PortalNav />
      <div className="appPortal">
        <div className="sideMenu">
          <MenuOutlinedIcon style={{ color: "white", margin: "1rem" }} />
          <nav>
            <div className="navlink">
              <Link
                id="link"
                className={"link-styles"}
                onClick={() => {
                  setPage((page = 1));
                }}
              >
                <DashboardSharpIcon
                  style={{ color: "white", height: "15px" }}
                />
                <span>Dashboard</span>
              </Link>
            </div>
            <div className="navlink">
              <Link
                className={"link-styles"}
                onClick={() => {
                  setPage((page = 2));
                }}
              >
                <AddCircleOutlineOutlinedIcon
                  style={{ color: "white", height: "15px" }}
                />
                <span>New Application</span>
              </Link>
            </div>
            <div className="navlink">
              <Link
                className={"link-styles"}
                onClick={() => {
                  setPage((page = 3));
                }}
              >
                <DescriptionOutlinedIcon
                  style={{ color: "white", height: "15px" }}
                />
                <span>Current Application</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="multiStep-Form">{pageDisplay()}</div>
      </div>
    </div>
  );
};

export default AppPortal;
