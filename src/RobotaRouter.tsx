import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

function RobotaRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/company-registration" element={<Registration />} />
      <Route path="/job-seeker-registration" element={<Registration />} />
    </Routes>
  );
}

export default RobotaRouter;
