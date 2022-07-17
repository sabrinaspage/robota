import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Jobs from "./pages/Jobs";
import Registration from "./pages/Registration";
import Success from "./pages/Success";
import ItsAMatch from "./pages/ItsAMatch";
import AddListing from "./pages/AddListing";
import Profile from "./pages/Profile";

function RobotaRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/company-registration" element={<Registration />} />
      <Route path="/job-seeker-registration" element={<Registration />} />
      <Route path="/company-success" element={<Success />} />
      <Route path="/job-seeker-success" element={<Success />} />
      <Route path="/company-listings" element={<Jobs />} />
      <Route path="/user-matches" element={<Jobs />} />
      <Route path="/its-a-match" element={<ItsAMatch />} />
      <Route path="/add-listing" element={<AddListing />} />
      <Route path="/seeker-profile" element={<Profile />} />
    </Routes>
  );
}

export default RobotaRouter;
