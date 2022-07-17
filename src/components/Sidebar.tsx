import RobotaLogo from "../images/Robota.svg";
import GrayArrow from "../images/shapes/gray-arrow.png";
import GrayPerson from "../images/shapes/gray-person.png";
import GrayWindow from "../images/shapes/gray-window.png";
import GrayClipboard from "../images/shapes/gray-clipboard.png";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  currentUserType: string;
}

interface SidebarItemProps {
  title?: string;
  active?: boolean;
  imgUrl: string;
  url?: string;
}

const SidebarItem = ({ title, active, imgUrl, url }: SidebarItemProps) => {
  return (
    <a
      className="border rounded border-0"
      style={{
        backgroundColor: active ? "#FEFFBE" : "transparent",
        width: "80%",
        height: 50,
        paddingTop: 15,
        paddingLeft: 10,
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
      }}
      href={url}
    >
      <img src={imgUrl} alt="" width="20" height="relative" />
      <span style={{ paddingLeft: 40 }}>{title}</span>
    </a>
  );
};

const Sidebar = ({ currentUserType }: SidebarProps) => {
  const currentPath = useLocation().pathname;

  if (currentUserType === "company") {
    const companyList = [
      { title: "Your Listings", url: "company-listings", imgUrl: GrayWindow },
      { title: "Get Verified", url: "#", imgUrl: GrayArrow },
      { title: "My Profile", url: "#", imgUrl: GrayPerson },
    ];
    return (
      <div
        className="p-2 bd-highlight d-flex flex-column align-items-center"
        style={{ backgroundColor: "white", width: 350 }}
      >
        <a href="/">
          <img src={RobotaLogo} alt="" width="100" height="relative" />
        </a>
        {companyList.map((company) => (
          <>
            <SidebarItem
              title={company.title}
              imgUrl={company.imgUrl}
              url={company.url}
              active={currentPath === company.url}
            />
            <p />
          </>
        ))}
      </div>
    );
  }
  const seekerList = [
    { title: "Your Matches", url: "user-matches", imgUrl: GrayWindow },
    { title: "Get Verified", url: "#", imgUrl: GrayArrow },
    { title: "My Profile", url: "seeker-profile", imgUrl: GrayPerson },
    { title: "Applications", url: "#", imgUrl: GrayClipboard },
  ];
  return (
    <div
      className="p-2 bd-highlight d-flex flex-column align-items-center"
      style={{ backgroundColor: "white", width: 350 }}
    >
      <>
        <a href="/">
          <img src={RobotaLogo} alt="" width="100" height="relative" />
        </a>
        {console.log(seekerList.map((seeker) => seeker.url === currentPath))}
        {seekerList.map((seeker) => (
          <>
            <SidebarItem
              title={seeker.title}
              imgUrl={seeker.imgUrl}
              url={seeker.url}
              active={currentPath === seeker.url}
            />
            <p />
          </>
        ))}
      </>
    </div>
  );
};

export default Sidebar;
