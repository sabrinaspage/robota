import { useLocation } from "react-router-dom";
import FileInput from "../components/FileInput";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import RobotaButton, { ButtonTypes } from "../components/RobotaButton";
import { homepageButtons, homepageLinks } from "../consts/constants";

const JobSeekerRegistration = () => (
  <div>
    <form>
      <Input
        label="First Name"
        placeholder="Enter First Name"
        id="firstname"
        type="text"
      />
      <Input
        label="Last Name"
        placeholder="Enter Last Name"
        id="lastname"
        type="text"
      />
      <Input label="Email" placeholder="Enter Email" id="email" type="email" />
      <FileInput label="Upload Resume" id="resume" />
      <Input
        label="Gender"
        placeholder="Enter gender"
        id="gender"
        type="text"
      />
      <Input
        label="Password"
        placeholder="Enter password"
        id="password"
        type="password"
        subtitle=""
      />
      <Input
        label="Reenter Password"
        placeholder="Reenter password"
        id="password2"
        type="password"
        subtitle=""
      />
      <RobotaButton
        title="Finish Registering"
        urlPath="/seeker-success"
        type={ButtonTypes.CONTAINED_LARGE}
      />
    </form>
  </div>
);

const CompanyRegistration = () => (
  <div>
    <form>
      <Input
        label="Company Name"
        placeholder="Enter Company Name"
        id="firstname"
        type="text"
      />
      <Input
        label="Company Email"
        placeholder="Enter Company Email"
        id="lastname"
        type="text"
      />
      <Input
        label="Company Description"
        placeholder="Enter Company Description"
        id="email"
        type="email"
      />
      <Input
        label="Password"
        placeholder="Enter Password"
        id="gender"
        type="text"
      />
      <Input
        label="Reenter Password"
        placeholder="Reenter Password"
        id="password2"
        type="password"
        subtitle=""
      />
      <RobotaButton
        title="Finish Registering"
        urlPath="/company-success"
        type={ButtonTypes.CONTAINED_LARGE}
      />
    </form>
  </div>
);

function Registration() {
  const currentPath = useLocation().pathname;

  return (
    <div className="App">
      <Navbar links={homepageLinks} buttons={homepageButtons} />
      {currentPath === "/company-registration" && <CompanyRegistration />}
      {currentPath === "/job-seeker-registration" && <JobSeekerRegistration />}
    </div>
  );
}

export default Registration;
