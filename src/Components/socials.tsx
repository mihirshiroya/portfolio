import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FaSpotify } from "react-icons/fa";

const Socials = () => {
  return (
    <div
      className="
    grid 
    grid-cols-3          
    gap-4 
    place-items-center
    md:flex              
    md:justify-around
  "
    >
      <SocialCard
        icon={<Github className="size-5 md:size-8" />}
        link="https://github.com/yourid"
      />
      <SocialCard
        icon={<Linkedin className="size-5 md:size-8" />}
        link="https://linkedin.com/in/yourid"
      />
      <SocialCard
        icon={<Twitter className="size-5 md:size-8" />}
        link="https://twitter.com/yourid"
      />
      <SocialCard
        icon={<FaSpotify className="size-5 md:size-8" />}
        link="https://open.spotify.com/user/yourid"
      />
      <SocialCard
        icon={<Mail className="size-5 md:size-8" />}
        link="mailto:yourid"
      />
    </div>

  );
};

interface SocialCardProps {
  icon: React.ReactNode;
  link?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon, link }) => {
  const Wrapper = link ? "a" : "div";

  return (
    <div className="p-4">
      <Wrapper
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative size-10 md:size-15 bg-background flex flex-col items-center justify-center gap-3 backdrop-blur-md px-4 overflow-hidden cursor-pointer"
      >
        {["-50%,50%", "50%,50%", "50%,-50%", "-50%,-50%"].map((pos, i) => {
          const [x, y] = pos.split(",");
          return (
            <svg
              key={i}
              viewBox="0 0 24 24"
              fill="none"
              className={`absolute z-50 size-10 md:size-18 stroke-primary/80 ${i === 0
                  ? "left-0 bottom-0"
                  : i === 1
                    ? "right-0 bottom-0"
                    : i === 2
                      ? "right-0 top-0"
                      : "left-0 top-0"
                }`}
              style={{ transform: `translate(${x}, ${y})` }}
            >
              <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
              <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
            </svg>
          );
        })}

        <div>{icon}</div>
      </Wrapper>
    </div>
  );
};

export default Socials;