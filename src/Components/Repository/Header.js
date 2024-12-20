import React from "react";
import { RefreshCw, Plus } from "lucide-react";
import Button from "../UI/Button";
function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:p-4 p-3">
      <div>
        <div className="mb-3 md:mb-0">
          <h1 className="text-xl font-semibold">Repositories</h1>
          <p className="text-sm text-gray-500">33 total repositories</p>
        </div>
      </div>
      <div className="flex gap-2 w-[90%] md:w-auto pr-4">
        <Button
          Icon={RefreshCw}
          className="flex-1  border border-gray-200 hover:bg-gray-50 md:flex-none "
        >
          Refresh All
        </Button>
        <Button
          Icon={Plus}
          className="flex-1 border border-gray-200 bg-[#1570ef] text-white hover:bg-blue-700 md:flex-none"
        >
          Add Repository
        </Button>
      </div>
    </div>
  );
}

export default Header;
