import React from "react";

function NavItem({ Icon, label, active, isSupport }) {
  const baseClasses =
    "flex items-center px-3 py-2 rounded-lg transition-colors duration-200 font-semibold text-sm";
  const activeClasses = active
    ? "bg-[#1570ef] text-white font-semibold"
    : isSupport
    ? "text-yellow-600 hover:bg-gray-50 font-semibold"
    : "text-gray-700 hover:bg-gray-50 font-semibold";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      {typeof Icon === "function" ? (
        <Icon />
      ) : (
        <Icon className="w-5 h-5 mr-2" />
      )}
      <span>{label}</span>
    </div>
  );
}

export default NavItem;
