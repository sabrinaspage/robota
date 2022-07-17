import RobotaButton, { ButtonTypes } from "../components/RobotaButton";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { useState } from "react";
import axios from "axios";
var randomstring = require("randomstring");

function AddListing() {
  const [jobValue, setJobValue] = useState({
    id: "",
    company_id: "",
    description: "",
    name: "",
    location: "",
    skills: "",
  });

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#EBFDFC",
        overflow: "auto",
        maxHeight: "100%",
      }}
    >
      <div className="d-flex flex-row" style={{ minHeight: "100%" }}>
        <Sidebar currentUserType={"company"} />
        <div
          className="d-flex flex-column align-items-center justify-content-center w-100"
          style={{
            maxHeight: "100vh",
            overflow: "auto",
            paddingLeft: 200,
            paddingRight: 200,
          }}
        >
          <h1 className="mt-1 fw-bold">Add Listing</h1>
          <Input
            label="Job Title"
            placeholder="Enter title"
            id="password"
            type="text"
            value={jobValue.name}
            changeHandler={(event) => {
              setJobValue((prev) => ({ ...prev, name: event.target.value }));
            }}
          />
          <p />
          <Input
            label="Job Location"
            placeholder="Enter location"
            id="password"
            type="text"
            value={jobValue.location}
            changeHandler={(event) => {
              setJobValue((prev) => ({
                ...prev,
                location: event.target.value,
              }));
            }}
          />
          <p />
          <TextArea
            label="Job Description"
            placeholder="Enter Description"
            id="password"
            value={jobValue.description}
            changeHandler={(event) => {
              setJobValue((prev) => ({
                ...prev,
                description: event.target.value,
              }));
            }}
          />
          <p />
          <Input
            label="Job Skills"
            placeholder="Enter skills"
            id="skills"
            type="text"
            value={jobValue.skills}
            changeHandler={(event) => {
              setJobValue((prev) => ({ ...prev, skills: event.target.value }));
            }}
          />
          <p />
          <Input
            label="Link"
            placeholder="Enter a Link (optional)"
            id="link"
            type="text"
            value=""
            changeHandler={(event) => null}
          />
          <p />
          <RobotaButton
            marginWidth="100%"
            title="Add now!"
            type={ButtonTypes.CONTAINED_LARGE}
            onClick={async () => {
              setJobValue((prev) => ({
                ...prev,
                company_id: localStorage.getItem("companyId") ?? "",
                id: randomstring.generate(),
              }));
              const res = await axios.post(
                "https://robota-355717.uw.r.appspot.com/company/job/add",
                jobValue
              );
              console.log(res.data);
              window.location.href = "/company-listings";
            }}
          />
          <p />
        </div>
      </div>
    </div>
  );
}

export default AddListing;
