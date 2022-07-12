import Navbar from "../components/Navbar";
import { homepageButtons, homepageLinks } from "../consts/constants";

interface JobsProps {
  id: string;
}

const CompanyListings = ({ id }: JobsProps) => (
  // call api here to get company's jobs postings
  <div style={{ backgroundColor: "#D0FCFF" }}></div>
);

const JobSeekerMatches = ({ id }: JobsProps) => (
  // call api here to get job seeker's matches
  <div style={{ backgroundColor: "#D0FCFF" }}></div>
);

function Jobs() {
  // call api for type of user and user id
  const currentUserId = "";
  let currentUserType = "company";

  return (
    <div className="App">
      <Navbar links={homepageLinks} buttons={homepageButtons} />
      {currentUserType === "company" && <CompanyListings id={currentUserId} />}
      {currentUserType === "seeker" && <JobSeekerMatches id={currentUserId} />}
    </div>
  );
}

export default Jobs;
