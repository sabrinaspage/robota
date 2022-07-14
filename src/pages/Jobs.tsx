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
  // TODO
  // call api here to get company's jobs postings
  const [jobValue, setJobValue] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const companyId = localStorage.getItem('companyId');
    console.log(companyId);
    axios.get("https://robota-355717.uw.r.appspot.com/company/job").then(response => {
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
        <JobCard
          title="Data Analyst I"
          description="Looking for an opportunity with one of the largest telecom companies in the world? This job may be for you!! This client is looking for a Financial Data Analyst with strong SQL and Excel skills. This position sits in Stamford, CT. And is only a 45 min train ride into New York City. This position requires for you to be a Green Card Holder or US Citizen. We can pay up to $60/hr. This will be a 3 months to hire role. If you are interested please send resume to fsampaio@espo.com"
          location="Rzeszow train station, Poland"
          skills="Data Visualization, Tableu, BI, Python, R"
          link="xyz.com"
          handleClick={() => null}
        />
        <JobCard
          title="Data Analyst I"
          description="Looking for an opportunity with one of the largest telecom companies in the world? This job may be for you!! This client is looking for a Financial Data Analyst with strong SQL and Excel skills. This position sits in Stamford, CT. And is only a 45 min train ride into New York City. This position requires for you to be a Green Card Holder or US Citizen. We can pay up to $60/hr. This will be a 3 months to hire role. If you are interested please send resume to fsampaio@espo.com"
          location="Rzeszow train station, Poland"
          skills="Data Visualization, Tableu, BI, Python, R"
          link="xyz.com"
          handleClick={() => null}
        />
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

const JobSeekerMatches = ({ id, currentUserType }: JobsProps) => (
  // call api here to get job seeker's matches
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
      <JobCard
        title="Data Analyst I"
        company="Espo"
        description="Looking for an opportunity with one of the largest telecom companies in the world? This job may be for you!! This client is looking for a Financial Data Analyst with strong SQL and Excel skills. This position sits in Stamford, CT. And is only a 45 min train ride into New York City. This position requires for you to be a Green Card Holder or US Citizen. We can pay up to $60/hr. This will be a 3 months to hire role. If you are interested please send resume to fsampaio@espo.com"
        location="Rzeszow train station, Poland"
        skills="Data Visualization, Tableu, BI, Python, R"
        link="xyz.com"
        cardActionTitle="Apply now!"
        handleClick={() => (window.location.href = "/its-a-match")}
      />
      <JobCard
        title="Data Analyst I"
        company="Disko"
        description="Looking for an opportunity with one of the largest telecom companies in the world? This job may be for you!! This client is looking for a Financial Data Analyst with strong SQL and Excel skills. This position sits in Stamford, CT. And is only a 45 min train ride into New York City. This position requires for you to be a Green Card Holder or US Citizen. We can pay up to $60/hr. This will be a 3 months to hire role. If you are interested please send resume to fsampaio@espo.com"
        location="Rzeszow train station, Poland"
        skills="Data Visualization, Tableu, BI, Python, R"
        link="xyz.com"
        cardActionTitle="Apply now!"
        handleClick={() => null}
      />
      <p />
    </div>
  </div>
);

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
