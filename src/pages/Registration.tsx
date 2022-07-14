import { useLocation } from "react-router-dom";
import FileInput from "../components/FileInput";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import RobotaButton, { ButtonTypes } from "../components/RobotaButton";
import { homepageButtons, homepageLinks } from "../consts/constants";
import { useState } from "react";
import axios from "axios";

const JobSeekerRegistration = () => {
  const [regValue, setRegValue] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    cv: "",
    password: "",
    password2: "",
  });

  return (
    <div>
      <form>
        <Input
          label="First Name"
          placeholder="Enter First Name"
          id="firstname"
          type="text"
          value={regValue.fname}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, fname: event.target.value }));
          }}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          id="lastname"
          type="text"
          value={regValue.lname}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, lname: event.target.value }));
          }}
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          id="email"
          type="email"
          value={regValue.email}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, email: event.target.value }));
          }}
        />
        <FileInput label="Upload Resume" id="resume" />
        <Input
          label="Gender"
          placeholder="Enter gender"
          id="gender"
          type="text"
          value={regValue.gender}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, gender: event.target.value }));
          }}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          id="password"
          type="password"
          subtitle=""
          value={regValue.password}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, password: event.target.value }));
          }}
        />
        <Input
          label="Reenter Password"
          placeholder="Reenter password"
          id="password2"
          type="password"
          subtitle=""
          value={regValue.password2}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, password2: event.target.value }));
          }}
        />
        <RobotaButton
          title="Finish Registering"
          urlPath="/job-seeker-success"
          type={ButtonTypes.CONTAINED_LARGE}
          onClick={async () => {
            const res = await axios.post(
              "https://robota-355717.uw.r.appspot.com/user/signup",
              regValue
            );
            console.log(res.data);
            window.location.href = "/job-seeker-success";
          }}
        />
      </form>
    </div>
  );
};

const CompanyRegistration = () => {
  const [regValue, setRegValue] = useState({
    name: "",
    email: "",
    description: "",
    password: "",
    password2: "",
  });

  return (
    <div>
      <form>
        <Input
          label="Company Name"
          placeholder="Enter Company Name"
          id="name"
          type="text"
          value={regValue.name}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, name: event.target.value }));
          }}
        />
        <Input
          label="Company Email"
          placeholder="Enter Company Email"
          id="email"
          type="email"
          value={regValue.email}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, email: event.target.value }));
          }}
        />
        <Input
          label="Company Description"
          placeholder="Enter Company Description"
          id="description"
          type="description"
          value={regValue.description}
          changeHandler={(event) => {
            setRegValue((prev) => ({
              ...prev,
              description: event.target.value,
            }));
          }}
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          id="password"
          type="password"
          value={regValue.password}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, password: event.target.value }));
          }}
        />
        <Input
          label="Reenter Password"
          placeholder="Reenter Password"
          id="password2"
          type="password"
          subtitle=""
          value={regValue.password2}
          changeHandler={(event) => {
            setRegValue((prev) => ({ ...prev, password2: event.target.value }));
          }}
        />
        <RobotaButton
          title="Finish Registering"
          urlPath="/company-success"
          type={ButtonTypes.CONTAINED_LARGE}
          onClick={async () => {
            const res = await axios.post(
              "https://robota-355717.uw.r.appspot.com/company/signup",
              regValue
            );
            console.log(res.data);
            window.location.href = "/company-success";
          }}
        />
      </form>
    </div>
  );
};

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
