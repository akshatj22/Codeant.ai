import React from "react";
import { useNavigate } from "react-router-dom";
import azure from "../../assets/azure.svg";
import github from "../../assets/github.svg";
import bitbucket from "../../assets/bitbucket.svg";
import gitlab from "../../assets/gitlab.svg";
import sso from "../../assets/sso.svg";
function LoginOptions({ deploymentType }) {
  const navigate = useNavigate();
  const saasOptions = [
    { icon: github, name: "Sign in with Github" },
    { icon: bitbucket, name: "Sign in with Bitbucket" },
    { icon: azure, name: "Sign in with Azure Devops" },
    { icon: gitlab, name: "Sign in with GitLab" },
  ];

  const selfHostedOptions = [
    { icon: gitlab, name: "Self hosted GitLab" },
    { icon: sso, name: "Sign in with SSO" },
  ];

  const currentOptions =
    deploymentType === "saas" ? saasOptions : selfHostedOptions;

  const handleLogin = () => {
    navigate("/repositories");
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="relative">
        <div
          className={`transition-all duration-300 ${
            deploymentType === "saas" ? "opacity-100" : "opacity-100"
          }`}
        >
          {currentOptions.map((option) => (
            <button
              key={option.name}
              onClick={handleLogin}
              className="w-full p-4 border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 mb-4"
            >
              <img
                src={option.icon}
                alt={option.name}
                className="w-[20px] h-[20px]"
              />
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoginOptions;
