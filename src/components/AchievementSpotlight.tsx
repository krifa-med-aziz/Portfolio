import { TAchievement } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

type AchievementSpotlightProps = {
  active: "certificates" | "volunteering";
  key: string;
  item: TAchievement | Omit<TAchievement, "link">;
};

export default function AchievementSpotlight({
  active,
  key,
  item,
}: AchievementSpotlightProps) {
  return (
    <>
      {active === "certificates" && (
        <Link
          href={(item as TAchievement).link}
          target="_blank"
          key={key}
          data-aos="zoom-in"
          className="flex items-center gap-5 text-left border border-gray-500/20 p-4 md:p-5 rounded-2xl mb-5 aos-init aos-animate"
        >
          <div className="p-4 md:p-6 bg-[#8b5cf6]/10 rounded-full">
            <GrCertificate className="text-[#8b5cf6] text-2xl md:text-4xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-sky-100">
              {item.title}
            </h3>
            <div className="text-[#8b949e] font-medium">
              <p className="text-sm sm:text-base">{item.company}</p>
              <p className="text-sm">{item.date}</p>
            </div>
          </div>
        </Link>
      )}
      {active === "volunteering" && (
        <div
          key={key}
          data-aos="zoom-in"
          className="flex items-center gap-5 text-left border border-gray-500/20 p-4 md:p-5 rounded-2xl mb-5 aos-init aos-animate"
        >
          <div className="p-4 md:p-6 bg-[#8b5cf6]/10 rounded-full">
            <FaRegHeart className="text-[#8b5cf6] text-2xl md:text-4xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-sky-100">
              {item.title}
            </h3>
            <div className="text-[#8b949e] font-medium">
              <p className="text-sm sm:text-base">{item.company}</p>
              <p className="text-sm">{item.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
