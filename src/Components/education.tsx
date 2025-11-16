import React from "react";
import { BadgePercent, Calendar } from 'lucide-react';
import ssasitLogo from '../assets/ssasit-logo.png'
import tdecLogo from '../assets/tdec-logo.png'

const Education = () => {
  const educationData: EducationItem[] = [
    {
      id: "edu1",
      logo: ssasitLogo,
      college: "SSASIT",
      degree: "BE in Computer Engineering",
      location: "Surat",
      cgpa: "8.23",
      link: "https://ssasit.edu.in/",
      startYear: "07_2022",
      endYear: "04_2025",
    },
    {
      id: "edu2",
      logo: tdecLogo,
      college: "TDEC",
      degree: "Diploma in Computer Engineering",
      location: "Surat",
      cgpa: "8.08",
      link: "https://tapidiploma.org/",
      startYear: "06_2019",
      endYear: "05_2022",
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
  link?: string;
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
          <div className="size-18 md:size-30 rounded-full overflow-hidden flex items-center justify-center border-dashed border-2 border-primary">
            <a
              href={edu.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full flex items-center justify-center"
            >
              <img
                src={edu.logo}
                alt={edu.college}
                width={70}
                height={70}
                className="h-4/6 w-4/6 object-cover hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

          <div className="h-full my-auto flex-1 pl-4 md:space-y-2">
            <h3 className="text-lg md:text-2xl font-bold flex items-center justify-between">{edu.degree} <span className="hidden text-xl font-semibold text-muted-foreground md:flex items-center"><Calendar className="inline-block size-5 md:size-6 mr-2 text-yellow-500" />{edu.startYear} - {edu.endYear}</span> </h3>
            <p className="text-muted-foreground font-semibold text-md md:text-xl">
              {edu.college}, {edu.location}
            </p>
            <h3 className="text-lg font-semibold text-muted-foreground md:hidden flex items-center"> <Calendar className="inline-block size-5 mr-2 text-yellow-500" />{edu.startYear} - {edu.endYear} </h3>
            <div className="text-lg md:text-xl text-muted-foreground font-semibold flex items-center">
              <BadgePercent className="inline-block size-5 md:size-6 mr-2 text-green-500" />{edu.cgpa}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}