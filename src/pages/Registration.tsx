import { useLocation } from "react-router-dom";
import FileInput from "../components/FileInput";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import RobotaButton, { ButtonTypes } from "../components/RobotaButton";
import { homepageButtons, homepageLinks } from "../consts/constants";
import { useState } from "react";
import axios from "axios";
import TextArea from "../components/TextArea";

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
    <div className="d-flex justify-content-center pt-3">
      <div
        className="justify-content-center border border-circle px-5 py-3"
        style={{ width: 500, backgroundColor: "#EBFDFC" }}
      >
        <form>
          <h2 className="d-flex justify-content-center pb-4">
            Basic Information
          </h2>
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
          <p />
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
          <p />
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
          <p />
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
          <p />
          <Input
            label="Password"
            placeholder="Enter password"
            id="password"
            type="password"
            subtitle="Your password should be between 4 and 12 characters"
            value={regValue.password}
            changeHandler={(event) => {
              setRegValue((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
          />
          <p />
          <Input
            label="Reenter Password"
            placeholder="Reenter password"
            id="password2"
            type="password"
            value={regValue.password2}
            changeHandler={(event) => {
              setRegValue((prev) => ({
                ...prev,
                password2: event.target.value,
              }));
            }}
          />
          <p />
          <RobotaButton
            title="Finish Registering"
            type={ButtonTypes.CONTAINED_LARGE}
            onClick={async () => {
              const res = await axios.post(
                "https://robota-355717.uw.r.appspot.com/user/signup",
                regValue
              );
              console.log(res.data);
              localStorage["userId"] = res.data.id;
              window.location.href = "/job-seeker-success";
            }}
          />
        </form>
      </div>
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
    <div className="d-flex justify-content-center pt-3">
      <div
        className="justify-content-center border border-circle px-5 py-3"
        style={{ width: 500, backgroundColor: "#EBFDFC" }}
      >
        <form>
          <h2 className="d-flex justify-content-center pb-4">
            Basic Information
          </h2>
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
          <p />
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
          <p />
          <TextArea
            label="Company Description"
            placeholder="Enter Company Description"
            id="description"
            value={regValue.description}
            changeHandler={(event) => {
              setRegValue((prev) => ({
                ...prev,
                description: event.target.value,
              }));
            }}
          />
          <p />
          <Input
            label="Password"
            placeholder="Enter Password"
            id="password"
            type="password"
            subtitle="Your password should be between 4 and 12 characters"
            value={regValue.password}
            changeHandler={(event) => {
              setRegValue((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
          />
          <p />
          <Input
            label="Reenter Password"
            placeholder="Reenter Password"
            id="password2"
            type="password"
            subtitle=""
            value={regValue.password2}
            changeHandler={(event) => {
              setRegValue((prev) => ({
                ...prev,
                password2: event.target.value,
              }));
            }}
          />
          <p />
          <RobotaButton
            title="Finish Registering"
            type={ButtonTypes.CONTAINED_LARGE}
            onClick={async () => {
              const res = await axios.post(
                "https://robota-355717.uw.r.appspot.com/company/signup",
                regValue
              );
              console.log(res.data);
              localStorage["companyId"] = res.data.id;
              window.location.href = "/company-success";
            }}
          />
        </form>
      </div>
    </div>
  );
};

function Registration() {
  const currentPath = useLocation().pathname;

  return (
    <div>
      <Navbar links={homepageLinks} buttons={homepageButtons} />
      {currentPath === "/company-registration" && <CompanyRegistration />}
      {currentPath === "/job-seeker-registration" && <JobSeekerRegistration />}
    </div>
  );
}

export default Registration;
