import { useState } from "react";
import Select from "./Select";

const Headline = () => <div></div>;

const SubHeadline = () => <div></div>;

const Image = () => <div></div>;

const Hero = () => {
  const defaultSelectString = "I want to find talent";
  const [selectedText, setSelectedText] = useState(defaultSelectString);

  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
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
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={() => console.log(selectedText)}
            >
              Default
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="bootstrap-docs.png"
            alt=""
            width="720"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
