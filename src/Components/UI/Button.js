import React from "react";
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "border border-gray-200 text-gray-700 hover:bg-gray-50",
};

function Button({ children, variant, Icon, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-2 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
}

export default Button;
