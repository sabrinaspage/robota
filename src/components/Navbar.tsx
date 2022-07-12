import RobotaLogo from "../images/Robota.svg";
import RobotaButton, { ButtonTypes } from "./RobotaButton";

export interface NavLinkType {
  title: string;
  urlPath: string;
  type?: ButtonTypes;
}

export interface NavbarProps {
  links: NavLinkType[];
  buttons: NavLinkType[];
}

const NavLink = ({ title, urlPath }: NavLinkType) => {
  return (
    <li className="nav-item" key={title}>
      <a className="nav-link" href={urlPath}>
        {title}
      </a>
    </li>
  );
};

const NavLinks = ({ links, buttons }: NavbarProps) => {
  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {links.map(({ title, urlPath }) => (
          <NavLink
            key={title}
            {...{
              title,
              urlPath,
            }}
          />
        ))}
      </ul>
      <span className="navbar-text">
        <form className="container-fluid justify-content-start">
          {buttons.map((button) => {
            const { title, urlPath, type } = button;
            if (type)
              return (
                <RobotaButton
                  key={title}
                  marginWidth="me-2"
                  {...{ title, urlPath, type }}
                />
              );
          })}
        </form>
      </span>
    </div>
  );
};

const Navbar = ({ links, buttons }: NavbarProps) => (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <div className="container">
          <img src={RobotaLogo} alt="" width="100" height="100" />
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLinks links={links} buttons={buttons} />
    </div>
  </nav>
);

export default Navbar;
