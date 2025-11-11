import React from "react";

const Education = () => {
  const educationData: EducationItem[] = [
    {
      id: "edu1",
      logo: "/images/college-logo.png",
      college: "SSASIT",
      degree: "BE in Computer Engineering",
      location: "Surat, Gujarat",
      cgpa: "8.33",
      startYear: "0.7_2022",
      endYear: "0.4_2025",
    },
    {
      id: "edu2",
      logo: "/images/college-logo2.png",
      college: "TDEC",
      degree: "Diploma in Computer Engineering",
      location: "Surat, Gujarat",
      cgpa: "8.23",
      startYear: "0.6_2019",
      endYear: "0.5_2022",
    },
  ];

  return (
    <div>
      <EducationSection education={educationData} />
    </div>
  );
};

export default Education;

export interface EducationItem {
  id: string;
  logo: string;
  college: string;
  degree: string;
  location: string;
  cgpa: string;
  startYear: string;
  endYear: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <div className="divide-y divide-dashed divide-slate-700 w-full">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="flex items-start p-4 bg-background backdrop-blur-sm"
        >
          <div className="h-full rounded-full overflow-hidden flex items-center justify-center border border-slate-600">
            <img
              src={edu.logo}
              alt={edu.college}
              width={70}
              height={70}
              className="object-cover"
            />
          </div>

          <div className="flex-1 pl-4">
            <h3 className="text-lg font-bold text-primary">{edu.degree}</h3>
            <p className="text-primary playfair font-semibold">
              {edu.college}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary mt-1">
              <span>{edu.location}</span>
              <span>•</span>
              <span>
                {edu.startYear} – {edu.endYear}
              </span>
              <span>•</span>
              <span>
                CGPA - <span className="font-semibold">{edu.cgpa}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}