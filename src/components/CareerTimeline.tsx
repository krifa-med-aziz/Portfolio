import { TCareer } from "@/lib/types";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type CareerTimelineProps = {
  item: TCareer;
};
export default function CareerTimeline({ item }: CareerTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute -left-[15px] sm:-left-9.5 mt-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full border-4 border-[#8b5cf6] bg-[#8b5cf6] shadow-2xl" />
      <div className="mb-2 text-left">
        <h4 className="text-lg sm:text-xl font-semibold text-sky-100">
          {item.title}
        </h4>
        <div className="text-[#8b5cf6] font-medium text-sm sm:text-base">
          {item.company}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#8b949e] mb-3">
        <div className="flex items-center gap-1">
          <FaLocationDot />
          {item.location}
        </div>
        <div className="flex items-center gap-1">
          <FaCalendarAlt />
          {item.startDate} - {item.endDate}
        </div>
      </div>

      {item.description && (
        <p className="space-y-1 text-xs sm:text-sm text-[#8b949e] text-left">
          {item.description}
        </p>
      )}
    </div>
  );
}
