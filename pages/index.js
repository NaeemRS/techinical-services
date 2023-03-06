import Experience from "@/components/Home/Experience";
import FollowSteps from "@/components/Home/FollowSteps";
import GetSolutions from "@/components/Home/GetSolutions ";
import GetTeams from "@/components/Home/GetTeams";
import LatestProject from "@/components/Home/LatestProject";
import Slider2 from "@/components/Home/Slider2";
import React from "react";
// import Slider from "../components/Home/Slider";
import YouGet from "../components/Home/YouGet";
function index() {
  return (
    <div className="">
      {/* <Slider /> */}
      <Slider2 />
      <Experience />
      <YouGet />
      <LatestProject />
      <FollowSteps />
      <GetSolutions />
      <GetTeams />
    </div>
  );
}

export default index;
