import React from "react";
type SectionHeaderProps = {
  title: string;
  description: string;
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 px-4">
      <h2 className="text-3xl font-bold mb-3 text-sky-100">{title}</h2>
      <div className="h-1 w-20 bg-[#8b5cf6] mx-auto" />
      <p className="mt-4 text-[#8b949e] max-w-2xl mx-auto">{description}</p>
    </div>
  );
}
