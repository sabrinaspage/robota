import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { homepageButtons, homepageLinks } from "../consts/constants";
import CompanySuccessImg from "../images/company-success.png";
import SeekerSuccessImg from "../images/seeker-success.png";
import RobotaLogo from "../images/Robota.svg";

const CompanySuccess = () => (
  <div style={{ backgroundColor: "#D0FCFF" }}>
    <div className="container">
      <div className="row p-5 pb-0 pe-lg-0 pt-lg-4 align-items-center rounded-3">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-2 fw-bold lh-1 pb-3">
            One Last <br /> Thing!
          </h1>
          <h2 className="fw-normal">
            Great, you're all registered! But, there is one last thing we need
            you to do.
            <p />
            Next, you'll be set to upload some positions for our job seekers.
            With your help, Ukrainians will be assigned a job with our algorithm
            that makes this feasible.
          </h2>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3 pt-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4"
              onClick={() => {
                window.location.href = "/company-listings";
              }}
            >
              Let's Go!
            </button>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1 p-0 m-0 overflow-hidden">
          <img
            className="rounded-lg-3"
            src={CompanySuccessImg}
            alt=""
            width="500"
          />
        </div>
      </div>
    </div>
  </div>
);

const JobSeekerSuccess = () => (
  <div style={{ backgroundColor: "#D0FCFF" }}>
    <div className="container">
      <div className="row p-5 pb-0 pe-lg-0 pt-lg-4 align-items-center rounded-3">
        <div className="col-lg-7 p-3 p-lg-3">
          <h1 className="display-2 fw-bold lh-1 pb-3">
            Now sit back <br /> and relax.
          </h1>
          <h2 className="fw-normal">
            With your resume uploaded, you will eventually be sent emails with
            jobs which align with your current resume experience.
            <p />
            As soon as you immigrate, you will have a position in store waiting
            to be worked on.
            <p />
            In the meantime, view your profile and your matches!
          </h2>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center pt-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4"
              onClick={() => {
                window.location.href = "/user-matches";
              }}
            >
              Let's Go!
            </button>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1 p-0 m-0 overflow-hidden">
          <img
            className="rounded-lg-3"
            src={SeekerSuccessImg}
            alt=""
            width="500"
          />
        </div>
      </div>
    </div>
  </div>
);

function Registration() {
  const currentPath = useLocation().pathname;

  return (
    <div className="App">
      <Navbar links={homepageLinks} buttons={homepageButtons} />
      {currentPath === "/company-success" && <CompanySuccess />}
      {currentPath === "/job-seeker-success" && <JobSeekerSuccess />}
    </div>
  );
}

export default Registration;
