import { useLocation } from "react-router-dom";
import JobCard from "../components/JobCard";
import RobotaButton, { ButtonTypes } from "../components/RobotaButton";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

interface JobsProps {
  id: string;
  currentUserType: string;
}

const CompanyListings = ({ id, currentUserType }: JobsProps) => {
  const [jobValue, setJobValue] = useState([{
    id: "",
    company_id: "",
    description: "",
    name: "",
    location: "",
    skills: ""
  }]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const companyId = localStorage.getItem('companyId');
    console.log(companyId);
    axios.post("https://robota-355717.uw.r.appspot.com/company/job", {"company": companyId}).then(response => {
      setJobValue(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="d-flex flex-row" style={{ minHeight: "100%" }}>
      <Sidebar currentUserType={currentUserType} />
      <div
        className="d-flex flex-column align-items-center w-100"
        style={{
          maxHeight: "100vh",
          overflow: "auto",
          paddingLeft: 200,
          paddingRight: 200,
        }}
      >
        <h1 className="mt-1 fw-bold">Your Listings</h1>
        {
          jobValue
            .map(job =>
              <JobCard
                key={job.id}
                title={job.name}
                description={job.description}
                location={job.location}
                skills={job.skills}
                link="" // does not have link
                handleClick={() => null}
              />
            )
        }
        <p />
        <RobotaButton
          marginWidth="100%"
          title="Add a Listing"
          urlPath="#"
          type={ButtonTypes.CONTAINED_LARGE}
        />
        <p />
      </div>
    </div>
  );
};

const JobSeekerMatches = ({ id, currentUserType }: JobsProps) => {
  // call api here to get job seeker's matches
  const [jobValue, setJobValue] = useState([{
    id: "",
    company_id: "",
    description: "",
    name: "",
    location: "",
    skills: ""
  }]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    axios.post("https://robota-355717.uw.r.appspot.com/user/match", {"user": 1}).then(response => {
      setJobValue(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (

    <div className="d-flex flex-row bd-highlight h-100">
      <Sidebar currentUserType={currentUserType} />
      <div
        className="d-flex flex-column align-items-center w-100"
        style={{
          maxHeight: "100vh",
          overflow: "auto",
          paddingLeft: 200,
          paddingRight: 200,
        }}
      >
        <h1 className="mt-1 fw-bold">Your Matches</h1>
        {
          jobValue
            .map(job =>
              <JobCard
                key={job.id}
                title={job.name}
                description={job.description}
                location={job.location}
                skills={job.skills}
                link="" // does not have link
                handleClick={() => null}
              />
            )
        }
        <p />
      </div>
    </div>
  )
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
      {currentPath === "/company-listings" && (
        <CompanyListings id={currentUserId} currentUserType="company" />
      )}
      {currentPath === "/user-matches" && (
        <JobSeekerMatches id={currentUserId} currentUserType="seeker" />
      )}
    </div>
  );
}

export default Jobs;
