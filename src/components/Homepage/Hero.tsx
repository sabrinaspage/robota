import { useState } from "react";
import Select from "./Select";
import HeroicImage from "../../images/hero-image.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const defaultSelectString = "I want to find talent";
  const [selectedText, setSelectedText] = useState("0");
  console.log(selectedText);

  return (
    <div style={{ backgroundColor: "#D0FCFF" }}>
      <div className="container">
        <div className="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Diverse, Top Talent from Ukraine
            </h1>
            <h2 className="display-7 lead">
              Connecting <span className="fw-bold">top individuals</span> from
              Ukraine to their dream jobs.
              <p />
              What brings you to our community?
            </h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 ">
              <Select
                defaultText={defaultSelectString}
                setSelectedText={setSelectedText}
              />
              <button
                type="button"
                className="btn btn-primary btn-lg px-4"
                onClick={() => {
                  if (selectedText === "0") {
                    console.log("hi");
                    navigate("/company-registration", { replace: true });
                  } else if (selectedText === "1") {
                    console.log("working?");
                    navigate("/job-seeker-registration", { replace: true });
                  }
                }}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <img
              className="rounded-lg-3"
              src={HeroicImage}
              alt=""
              width="450"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
