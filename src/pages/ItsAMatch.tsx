import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { homepageButtons, homepageLinks } from "../consts/constants";
import HappyMatch from "../images/happy-match.png";

const JobSeekerSuccess = () => (
  <div
    className="container d-flex pe-5 ps-5"
    style={{
      backgroundColor: "#D0FCFF",
      minHeight: "100vh",
      minWidth: "100vw",
    }}
  >
    <div className="row align-items-center justify-items-center">
      <div className="col-lg-7">
        <h1 className="display-2 fw-bold lh-1 pb-3">You Applied to the Job!</h1>
        <h2 className="fw-normal">
          Great! We automatically sent your resume over, along with your
          profile. Now you can wait for the company to reach out.
          <p />
          In the meantime, apply to more of your matches!
        </h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3 pt-3">
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
      <div className="col-lg-5">
        <img
          className="rounded-lg-3 ps-5"
          src={HappyMatch}
          alt=""
          width="580"
        />
      </div>
    </div>
  </div>
);

function ItsAMatch() {
  return <JobSeekerSuccess />;
}

export default ItsAMatch;
