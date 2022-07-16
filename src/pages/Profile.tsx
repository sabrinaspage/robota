import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Person3 from "../images/alumni-logos/Person3.png";
import SkillPill from "../components/SkillPill";
import Pdf from "../components/Pdf";
import SampleResume from "../resume_sample_student8ea47e04a8fe67e6b7acff0000376a3b.pdf";

interface ProfileProps {
  currentUserType: string;
}

const JobSeekerProfile = ({ currentUserType }: ProfileProps) => {
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const skills = ["Powerpoint", "Figma", "teamwork"];

  return (
    <div className="d-flex flex-row bd-highlight h-100">
      <Sidebar currentUserType={currentUserType} />
      <div
        className="d-flex flex-column w-100"
        style={{
          maxHeight: "100vh",
          overflow: "auto",
          padding: 20,
        }}
      >
        <div
          className="h-100 overflow-auto ps-4 pt-4"
          style={{ backgroundColor: "white" }}
        >
          <img style={{ width: 100 }} src={Person3} />
          <h1 className="mt-1 fw-bold">
            Grace Gong <span className="fw-normal">(she/her)</span>
          </h1>
          <h4 className="mt-1 fw-bold">
            Gender: <span className="fw-normal">female</span>
          </h4>
          <h4 className="mt-1 fw-bold">
            Skills:{" "}
            {skills.map((skill) => (
              <SkillPill title={skill} />
            ))}
          </h4>
          <h4 className="mt-1 fw-bold">Resume:</h4>
          <Pdf pdfURL={SampleResume} />
        </div>
      </div>
    </div>
  );
};

function Jobs() {
  // call api for type of user and user id
  const currentUserId = "";
  const currentPath = useLocation().pathname;

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#D0FCFF",
        overflow: "auto",
        maxHeight: "100%",
      }}
    >
      {currentPath === "/seeker-profile" && (
        <JobSeekerProfile currentUserType="seeker" />
      )}
    </div>
  );
}

export default Jobs;
