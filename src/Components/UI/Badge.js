import React from "react";

const variants = {
  public: "border border-w-10 bg-blue-50 border-blue-600 text-blue-600",
  private: "border bg-blue-50 border-blue-600 text-blue-600",
  warning: "border bg-blue-50 border-blue-600 text-blue-600",
};
function Badge({ children, variant }) {
  return (
    <span className={`px-1.5 py-0.5 text-xs rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}

export default Badge;
