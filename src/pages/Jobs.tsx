import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

interface JobsProps {
  id: string;
  currentUserType: string;
}

const CompanyListings = ({ id, currentUserType }: JobsProps) => {
  // call api here to get company's jobs postings
  return (
    <div className="d-flex flex-row bd-highlight h-100">
      <Sidebar currentUserType={currentUserType} />
      <div
        className="p-2 bd-highlight w-100"
        style={{ backgroundColor: "#D0FCFF" }}
      >
        Flex item
      </div>
    </div>
  );
};

const JobSeekerMatches = ({ id, currentUserType }: JobsProps) => (
  // call api here to get job seeker's matches
  <div className="d-flex flex-row bd-highlight h-100">
    <Sidebar currentUserType={currentUserType} />
    <div
      className="p-2 bd-highlight w-100"
      style={{ backgroundColor: "#D0FCFF" }}
    >
      Flex item
    </div>
  </div>
);

function Jobs() {
  // call api for type of user and user id
  const currentUserId = "";
  const currentPath = useLocation().pathname;

  return (
    <div style={{ height: "100vh" }}>
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
