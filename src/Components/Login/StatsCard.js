import React from "react";
import logo from "../../assets/Logo.png";
import piechart from "../../assets/piechart.svg";
function StatsCard() {
  return (
    <div className="relative bottom-[70px]">
      <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="CodeAnt AI" className="w-6 h-6" />
            <span className="text-[18px] font-bold text-[#081735]">
              AI to Detect & Autofix Bad Code
            </span>
          </div>

          <div className="h-[1px] bg-gray-100 -mx-6 mb-6" />

          <div className="grid grid-cols-3 gap-4 pb-2">
            <div className="text-center">
              <div className="text-[18px] font-bold text-[#081735] mb-1">
                30+
              </div>
              <div className="text-[14px] text-[#171717]">Language Support</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-[#081735] mb-1">
                10K+
              </div>
              <div className="text-[14px] font-regular text-[#171717]">
                Developers
              </div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-[#081735] mb-1">
                100K+
              </div>
              <div className="text-[14px] text-[#171717]">Hours Saved</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[300px] translate-x-[-50%] bottom-[-160px]">
        <div className="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] pt-4 pb-4 pr-6 pl-6 w-[280px]">
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-16 h-16 bg-[#F4F3FF] rounded-full flex items-center justify-center">
                <img src={piechart} alt="Statistics" className="w-10 h-10" />
              </div>

              <div className="text-right">
                <div className="text-[14px] font-bold text-[#0049C6]">
                  ↑ 14%
                </div>
                <div className="text-xs text-black">This week</div>
              </div>
            </div>

            <div>
              <div className="text-[14px] text-black font-bold mb-1">
                Issues Fixed
              </div>
              <div className="text-[32px] font-bold text-gray-900 leading-none">
                500K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
