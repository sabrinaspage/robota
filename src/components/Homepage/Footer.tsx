import RobotaLogo from "../../images/Robota.svg";

const Footer = () => (
  <div className="container mt-5">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 mb-0 py-3 px-3">
        <h3 className="text-muted fw-bold">Stay in the know</h3>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="email"
          />
        </div>
      </div>

      <a className="navbar-brand" href="#">
        <div className="container">
          <img src={RobotaLogo} alt="" width="100" height="100" />
        </div>
      </a>

      <ul className="nav col-md-4 justify-content-end py-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Privacy
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Contact US
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
