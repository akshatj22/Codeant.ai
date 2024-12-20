import React, { useState } from "react";
import largeLogo from "../assets/Subtract.svg";
import logo from "../assets/logo.svg";
import StatsCard from "../Components/Login/StatsCard";
import DeploymentToggle from "../Components/Login/DeploymentToggle";
import LoginOptions from "../Components/Login/LoginOptions";
function WelcomePage() {
  const [deploymentType, setDeploymentType] = useState("saas");
  return (
    <div className="min-h-screen bg-white flex">
      
      <div className="hidden md:flex flex-1 border items-center justify-center p-8">
        <div className="relative">
          <div className="absolute left-[-174px] top-[160px] w-70 h-90">
            <img src={largeLogo} alt="" className="w-full h-full" />
          </div>
          <StatsCard />
        </div>
      </div>

      
      <div className="flex-1 flex items-center flex-col bg-[#fafafa] justify-center p-4">
        <div className="border content-center w-full max-w-[540px] min-h-[600px] rounded-lg bg-white px-4 md:px-6">
          <div className="flex items-center justify-center pt-6 mb-6">
            <img src={logo} alt="CodeAnt AI" className="w-10 h-10 mb-4" />
            <span className="text-xl font-normal font-satoshi">CodeAnt AI</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-8">
                  Welcome to CodeAnt AI
                </h1>
              </div>

              <DeploymentToggle
                selected={deploymentType}
                onSelect={setDeploymentType}
              />
              <hr />
              <div className="flex min-h-[330px] items-start pb-6 justify-center">
                <LoginOptions deploymentType={deploymentType} />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm m-4 text-gray-900">
          By signing up you agree to the{" "}
          <a href="/privacy" className="text-black font-bold hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
