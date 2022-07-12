import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Success from "./pages/Success";

function RobotaRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/company-registration" element={<Registration />} />
      <Route path="/job-seeker-registration" element={<Registration />} />
      <Route path="/company-success" element={<Success />} />
      <Route path="/job-seeker-success" element={<Success />} />
    </Routes>
  );
}

export default RobotaRouter;
