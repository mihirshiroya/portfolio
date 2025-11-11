import { useState } from "react"
import { type Experience, ExperienceThread } from "./thread"

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "Tech Innovations Inc",
      role: "Senior Developer",
      details: "Led development of enterprise applications",
      startDate: "Jan 2022",
      endDate: "Present",
      level: "company",
      replies: [
        {
          id: "1-1",
          company: "Tech Innovations Inc",
          role: "Senior React Developer",
          details: "Full-stack React and Node.js development",
          startDate: "Jan 2022",
          endDate: "Present",
          level: "position",
          replies: [
            {
              id: "1-1-1",
              company: "Tech Innovations Inc",
              role: "Senior React Developer",
              details: "Built microservices architecture serving 1M+ users with 99.9% uptime",
              startDate: "Jan 2022",
              endDate: "Dec 2023",
              level: "detail",
              replies: [],
            },
            {
              id: "1-1-2",
              company: "Tech Innovations Inc",
              role: "Senior React Developer",
              details: "Mentored 5 junior developers and established coding standards",
              startDate: "Jan 2022",
              endDate: "Present",
              level: "detail",
              replies: [],
            },
          ],
        },
        {
          id: "1-2",
          company: "Tech Innovations Inc",
          role: "Mid-level Frontend Developer",
          details: "React and Vue.js development",
          startDate: "Jun 2020",
          endDate: "Dec 2021",
          level: "position",
          replies: [
            {
              id: "1-2-1",
              company: "Tech Innovations Inc",
              role: "Mid-level Frontend Developer",
              details: "Redesigned dashboard UI reducing load time by 60%",
              startDate: "Jun 2020",
              endDate: "Dec 2021",
              level: "detail",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      company: "StartupXYZ",
      role: "Full Stack Developer",
      details: "Built scalable web applications",
      startDate: "Mar 2019",
      endDate: "May 2020",
      level: "company",
      replies: [
        {
          id: "2-1",
          company: "StartupXYZ",
          role: "Full Stack Developer",
          details: "Node.js, React, and PostgreSQL",
          startDate: "Mar 2019",
          endDate: "May 2020",
          level: "position",
          replies: [
            {
              id: "2-1-1",
              company: "StartupXYZ",
              role: "Full Stack Developer",
              details: "Developed payment integration with Stripe, processing $5M+ annually",
              startDate: "Mar 2019",
              endDate: "May 2020",
              level: "detail",
              replies: [],
            },
          ],
        },
      ],
    },
  ])

  return (
    <div className="space-y-6 p-4 overflow-hidden">
      {experiences.map((exp) => (
        <ExperienceThread key={exp.id} experience={exp}/>
      ))}
    </div>
  )
}