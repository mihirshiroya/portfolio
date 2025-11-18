import React from "react";
import { Code, MapPin, Phone, Mail, Cake, Palette } from "lucide-react";
import profilepfp from "../assets/profile-header.jpg";
import indiaflag from "../assets/india-flag.png";
import pfp from "../assets/pfp.webp";

const ProfileHeader = () => {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-start justify-center bg-background no-scrollbar">
      <img
        src={profilepfp}
        alt="Profile Header"
        className="w-full h-[180px] md:h-[200px] object-fill "
      />
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div className="border border-r-2 border-dashed relative">
        <div className="border-x-2 border-ring/50 flex items-center justify-center p-1 rounded-full border-2">
          <img
            src={pfp}
            alt="Avatar"
            className="size-28 md:size-40 rounded-full overflow-hidden border-background object-cover"
          />
          <img
            src={indiaflag}
            alt="India Flag"
            className="absolute top-0 left-0 w-10 h-6 md:w-14 md:h-10 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 h-full flex-col divide-y-2 divide-dashed divide-ring/50">
        <div
          className="hidden md:block relative w-full h-3/5 bg-transparent 
    [background-image:radial-gradient(#444000_1px,transparent_1px)] 
    [background-size:12px_12px]"
        ></div>

        <span className="playfair text-3xl p-2 font-semibold inline-flex items-center">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Mihir Shiroya
        </span>
        <span className="px-2 text-muted-foreground font-semibold ml-4 md:text-lg h-full flex items-center justify-start">
          {" "}
          Full-Time Software Engineer | Part-Time Design Engineer
        </span>
      </div>
    </div>
  );
};

const MoreInfo = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 my-2">
      <RoleItem
        icon={<Code className="size-6 text-muted-foreground" />}
        title="Frontend Developer"
      />
      <RoleItem
        icon={<Palette className="size-6 text-muted-foreground" />}
        title="Design Engineer"
      />
      <RoleItem
        icon={<MapPin className="size-6 text-muted-foreground" />}
        title="Surat_Gujarat_India"
      />
      <RoleItem
        icon={<Phone className="size-6 text-muted-foreground" />}
        title="97269 30172"
      />
      <RoleItem
        icon={<Mail className="size-6 text-muted-foreground" />}
        title="Mihirshiroya785@gmail.com"
      />
      <RoleItem
        icon={<Cake className="size-6 text-muted-foreground" />}
        title="01 / 05 / 2004"
      />
    </div>
  );
};

const RoleItem = ({ icon, title }) => {
  return (
    <div className="w-full flex items-center py-2 px-4">
      <div className="rounded-full flex items-center justify-center ring-2 ring-primary/50">
        <div className="p-1.5 rounded-full bg-background flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="flex flex-1 pl-4">
        <span className="font-semibold text-muted-foreground">{title}</span>
      </div>
    </div>
  );
};

export { ProfileHeader, PersonalInfo, MoreInfo };

//ideas

// about me

// details with icon and further more details like phone icon and number email icon and email etc

//experince

//my gadgets

//skills

//projects

//socials

//footer with credit