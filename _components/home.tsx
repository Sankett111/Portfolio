"use client";

import Image from "next/image";
import  RollingClock from "@/_components/RollingClock"
import  ContributionGraph from "@/_components/contribution-graph";
import { Clock, MapPin, Mail, Download } from "lucide-react";
import {FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaMediumM} from "react-icons/fa";
import { ThreeDIconButton } from "@/_components/3d-button";
import { MarqueeDemo } from "./marquee-demo";
import { FrameTag } from "./frame-tag";
import PixelArtVideo from "./pixel-art";
import me1 from "../public/profile/profile.jpg"

export default function Home() {
  return (
    <section id="home" className="space-y-5 -translate-y-2">
      {/* Scenery image */}
      <div className="relative flex aspect-7/3 w-full items-center justify-center overflow-hidden rounded-2xl">
        <div className="w-full">
          <PixelArtVideo/>
        </div>
      </div>

      {/* Profile section */}
      <div className="flex min-h-45 w-full items-center gap-5 p-2">
        {/* Portrait */}
        <div className="relative flex h-31 w-30 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 dark:bg-neutral-900">
          <Image src={me1} alt="profilePic" sizes="120px" loading="eager" fill className="rounded-lg object-cover"></Image>
        </div>

        {/* Profile details */}
        <div className="min-w-0 ">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sanket Nandurkar
          </h1>
          <a
            className="text-md italic tracking-wide  text-neutral-700 dark:text-muted-foreground"
            href="https://github.com/Sankett111/xeni"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookin&apos; Up Xeni
          </a>

          <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500 dark:text-muted-foreground">
  <Clock size={14} strokeWidth={1.8} />
  <RollingClock />
</div>

          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-muted-foreground">
            <MapPin size={14} />
            <span>Mumbai, India</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="-translate-y-4 text-[15px] leading-7 tracking-wide text-neutral-400 dark:text-muted-foreground">
        <p>
          ◈ Hello, I am a{" "}
          <span className="text-neutral-800 dark:text-white">
            Full Stack Developer
          </span>
          .
        </p>

        <p>
          ◈ Currently building{" "}
          <span className="text-neutral-800 dark:text-white">
            Xeni ~ A powerful C++ based Vector DB.
          </span>
        </p>

        <p>
          ◈ <span className="text-neutral-800 dark:text-white">Curious</span>{" "}
          about how things work.
        </p>
      </div>

      {/* divider */}
      <div
        className="animated-border mt-4"
        aria-hidden="true"
      />

  {/* Utility buttons */}
<div className="mx-2 flex items-center gap-2">

  {/* Email */}
  <div className="tooltip tooltip-top" data-tip="Email">
    <ThreeDIconButton
      label="Email me"
      variant="soft"
      onClick={() => {
        window.location.href =
          "https://mail.google.com/mail/?view=cm&fs=1&to=sanket7132@gmail.com&su=Hello%20Sanket";
      }}
    >
      <Mail size={16} strokeWidth={1.8} />
    </ThreeDIconButton>
  </div>

  {/* Github */}
  <div className="tooltip tooltip-top" data-tip="GitHub">
    <ThreeDIconButton
      label="GitHub profile"
      variant="soft"
      onClick={() =>
        window.open("https://github.com/Sankett111", "_blank", "noopener,noreferrer")
      }
    >
      <FaGithub size={16} />
    </ThreeDIconButton>
  </div>

  {/* LinkedIn */}
  <div className="tooltip tooltip-top" data-tip="LinkedIn">
    <ThreeDIconButton
      label="LinkedIn profile"
      variant="soft"
      onClick={() =>
        window.open("https://www.linkedin.com/in/sanket-nandurkar", "_blank", "noopener,noreferrer")
      }
    >
      <FaLinkedinIn size={16} />
    </ThreeDIconButton>
  </div>

  {/* Medium */}
  <div className="tooltip tooltip-top" data-tip="Medium">
    <ThreeDIconButton label="Medium" variant="soft" onClick={() => {}}>
      <FaMediumM size={16} />
    </ThreeDIconButton>
  </div>

  {/* Resume */}
  <div className="tooltip tooltip-top" data-tip="Download Resume">
    <ThreeDIconButton
      label="Download resume"
      variant="soft"
      onClick={() => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Sanket-Nandurkar Resume.pdf";
        link.click();
      }}
    >
      <Download size={16} strokeWidth={1.8} />
    </ThreeDIconButton>
  </div>

</div>
    
    <div className="mb-5">
    <FrameTag>
      <span className="text-sm tracking-wider">My Skill Set</span>
    </FrameTag>
  </div>
  <div className="w-full overflow-hidden">
    <MarqueeDemo />
  </div>
  <div className="mb-5">
     <FrameTag>
      <span className="text-sm tracking-wider">Contribution</span>
     </FrameTag>
  </div>
  <div className="w-full ">
    <ContributionGraph/>
  </div>
</section>    
  );
}
