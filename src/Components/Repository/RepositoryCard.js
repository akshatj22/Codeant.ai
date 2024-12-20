import React from "react";
import Badge from "../UI/Badge";
import { Database } from "lucide-react";
import { languageColors } from "../../utils/constants";
function RepositoryCard({ repository, isLast }) {
  const { name, type, language, size, updatedAt, assignee } = repository;
  return (
    <div
      className={`bg-white pl-0.5 border-t border-gray-200 hover:bg-gray-50 ${
        isLast ? "rounded-b-xl" : ""
      } `}
    >
      <div className="md:p-4 p-2">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-3  flex-wrap">
              <h3 className="text-[15px] font-medium">{name}</h3>
              <Badge variant={type.toLowerCase()}>{type}</Badge>
            </div>
            <div className="flex items-center gap-4 text-sm  text-gray-600 flex-wrap">
              <div className="flex flex-row-reverse gap-2 items-center">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${languageColors[language]} mr-2`}
                />
                {language}
              </div>
              <div className="flex items-center">
                <Database className="w-3 h-3 mr-1.5 text-gray-400" />
                {size}
              </div>
              <div>Updated {updatedAt}</div>
            </div>
          </div>
          {assignee && (
            <div className="flex items-center gap-2">
              {assignee.avatar ? (
                <img
                  src={assignee.avatar}
                  alt={assignee.name}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  {assignee.name.charAt(0)}
                </div>
              )}
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                {assignee.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;
