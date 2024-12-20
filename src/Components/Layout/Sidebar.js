import React, { useState } from "react";

import NavItem from "./NavItem";

import home from "../../assets/home.svg";
import cloud from "../../assets/cloud.svg";
import code from "../../assets/code.svg";
import manual from "../../assets/manual.svg";
import logo from "../../assets/Logo.png";

import { Settings, Phone, LogOut, ChevronDown } from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userName = "UtkarshDhairyaPanwar";

  const navItems = [
    {
      icon: () => <img src={home} className="w-5 h-5 mr-2" />,
      label: "Repositories",
      active: true,
    },
    {
      icon: () => <img src={code} className="w-5 h-5 mr-2" />,
      label: "AI Code Review",
    },
    {
      icon: () => <img src={cloud} className="w-5 h-5 mr-2" />,
      label: "Cloud Security",
    },
    {
      icon: () => <img src={manual} className="w-5 h-5 mr-2" />,
      label: "How to Use",
    },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
        fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ease-in-out
        md:w-[230px] md:h-full md:border-r md:border-gray-200
        ${isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"}
      `}
      >
        <div className="flex flex-col h-full md:p-4 p-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="CodeAnt AI" className="w-6 h-6" />
              <span className="text-xl font-normal font-satoshi">
                CodeAnt AI
              </span>
            </div>
            <button onClick={onClose} className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="w-[180px] border rounded-lg border-gray-300 p-1 mb-4 ml-2 px-2 text-sm text-gray-600">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{userName}</span>
              <ChevronDown
                className={`transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
                <ul className="py-1 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  Icon={item.icon}
                  label={item.label}
                  active={item.active}
                />
              ))}
            </nav>
          </div>

          <div className="mt-auto pt-4 space-y-1 w-full">
            <NavItem Icon={Phone} label="Support" />
            <NavItem Icon={LogOut} label="Logout" className="mb-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
