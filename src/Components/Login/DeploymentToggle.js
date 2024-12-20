import React from "react";

function DeploymentToggle({ selected, onSelect }) {
  return (
    <div className="relative flex justify-self-center rounded-lg border border-gray-200 p-1 w-full max-w-[640px] mx-auto">
      <div
        className={`absolute top-1 transition-all duration-300 ease-in-out h-[calc(100%-8px)] w-[calc(50%-4px)] bg-blue-600 rounded-md
        ${selected === "self-hosted" ? "translate-x-full" : "translate-x-0"}`}
      />

      <button
        onClick={() => onSelect("saas")}
        className={`relative flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300
        ${
          selected === "saas"
            ? "text-white"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        SAAS
      </button>
      <button
        onClick={() => onSelect("self-hosted")}
        className={`relative flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300
        ${
          selected === "self-hosted"
            ? "text-white"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Self Hosted
      </button>
    </div>
  );
}

export default DeploymentToggle;
