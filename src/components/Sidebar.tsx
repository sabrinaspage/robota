import RobotaLogo from "../images/Robota.svg";
import GrayArrow from "../images/shapes/gray-arrow.png";
import GrayPerson from "../images/shapes/gray-person.png";
import GrayWindow from "../images/shapes/gray-window.png";
import GrayClipboard from "../images/shapes/gray-clipboard.png";

interface SidebarProps {
  currentUserType: string;
}

interface SidebarItemProps {
  title?: string;
  active?: boolean;
  imgUrl: string;
}

const SidebarItem = ({ title, active, imgUrl }: SidebarItemProps) => {
  return (
    <div
      className="border rounded border-0"
      style={{
        backgroundColor: active ? "#FEFFBE" : "transparent",
        width: "80%",
        height: 50,
        paddingTop: 15,
        paddingLeft: 10,
        cursor: "pointer",
      }}
    >
      <img src={imgUrl} alt="" width="20" height="relative" />
      <span style={{ paddingLeft: 40 }}>{title}</span>
    </div>
  );
};

const Sidebar = ({ currentUserType }: SidebarProps) => {
  if (currentUserType === "company") {
    return (
      <div
        className="p-2 bd-highlight d-flex flex-column align-items-center"
        style={{ backgroundColor: "white", width: 400 }}
      >
        <a href="/">
          <img src={RobotaLogo} alt="" width="100" height="relative" />
        </a>
        <SidebarItem title="Your Listings" imgUrl={GrayWindow} active />
        <p />
        <SidebarItem title="Get Verified" imgUrl={GrayArrow} />
        <p />
        <SidebarItem title="My Profile" imgUrl={GrayPerson} />
      </div>
    );
  }
  return (
    <div
      className="p-2 bd-highlight d-flex flex-column align-items-center"
      style={{ backgroundColor: "white", width: 400 }}
    >
      <a href="/">
        <img src={RobotaLogo} alt="" width="100" height="relative" />
      </a>
      <SidebarItem title="Your Matches" imgUrl={GrayWindow} active />
      <p />
      <SidebarItem title="Get Verified" imgUrl={GrayArrow} />
      <p />
      <SidebarItem title="My Profile" imgUrl={GrayPerson} />
      <p />
      <SidebarItem title="Applications" imgUrl={GrayClipboard} />
    </div>
  );
};

export default Sidebar;
