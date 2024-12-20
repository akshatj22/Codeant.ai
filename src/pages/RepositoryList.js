import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Sidebar from "../Components/Layout/Sidebar";
import Header from "../Components/Repository/Header";
import RepositoryCard from "../Components/Repository/RepositoryCard";
import SearchBar from "../Components/Repository/SearchBar";
function RepositoryList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const repositories = [
    {
      name: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updatedAt: "1 day ago",
      status: "Anonymous",
    },
    {
      name: "codeant-ci-app",
      type: "Private",
      language: "Javascript",
      size: "5871 KB",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updatedAt: "5 days ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updatedAt: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      type: "Private",
      language: "Java",
      size: "6210 KB",
      updatedAt: "6 days ago",
    },
    {
      name: "blog-website",
      type: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updatedAt: "4 days ago",
    },
    {
      name: "social-network",
      type: "Private",
      language: "PHP",
      size: "5432 KB",
      updatedAt: "7 days ago",
    },
  ];

  return (
    <div className="flex min-h-screen bg-white md:bg-gray-50">
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="w-full md:ml-[240px] flex-1">
        <div className="md:p-8">
          <div className="flex md:hidden items-center border border-gray-200 justify-between p-2 bg-white">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="CodeAnt AI" className="w-6 h-6" />
              <span className="text-xl font-normal">CodeAnt AI</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="md:max-w-[1200px] md:border md:border-gray-200 md:rounded-xl mx-auto">
            <Header />
            <SearchBar onSearch={setSearchTerm} />
            <div className="divide-y divide-gray-200">
              {repositories.map((repo, index) => (
                <RepositoryCard
                  key={index}
                  repository={repo}
                  isLast={index === repositories.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RepositoryList;
