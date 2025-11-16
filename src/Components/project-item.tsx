import { useState } from 'react';
import { Github,Link,Hourglass,ChevronDown   } from 'lucide-react';


interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  details?: string[];
  link?: string;
}

export default function ProjectCard({
  image,
  title,
  shortDescription,
  fullDescription,
  technologies,
  details,
  link,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-lg bg-background shadow-md transition-all duration-300`}
    >
      {/* Header - Title + Image + Toggle */}
      <div className="flex flex-row gap-4 md:gap-6 p-4">
        <div className="relative overflow-hidden rounded-full bg-muted size-18 md:size-30">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        {/* Title and Short Description */}
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-bold text-foreground md:text-2xl">
            {title}  <Link className=" size-5 md:size-7 inline-block ml-2 text-primary"/>
          </h3>
          <p className="text-sm text-muted-foreground md:text-lg">
            {shortDescription}
          </p>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-auto rounded-lg bg-primary/5 p-2 transition-colors hover:bg-primary/10 h-fit"
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${title}`}
        >
          <ChevronDown
            size={24}
            className={`text-primary transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="border-t border-border px-4 py-4 md:px-6 md:py-6">
          <div className="space-y-4">
            {/* Full Description */}
            <div>
              <h4 className="mb-2 text-sm md:text-xl font-semibold text-foreground">
                Overview
              </h4>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {fullDescription}
              </p>
            </div>

            {/* Details/Features as Bullet Points */}
            {details && details.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm md:text-xl font-semibold text-foreground">
                  Key Features
                </h4>
                <ul className="space-y-2 list-disc list-inside">
                  {details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-sm md:text-lg text-muted-foreground leading-relaxed"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {technologies.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm md:text-xl font-semibold text-foreground">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Link */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                View Project →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
