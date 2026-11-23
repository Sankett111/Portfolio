"use client"
import { FrameTag } from "./frame-tag";
import { Mail } from "lucide-react";
import {FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaMediumM} from "react-icons/fa";

import { ThreeDIconButton } from "./3d-button";
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-3">
      <FrameTag>Contact</FrameTag>

      <div className="py-8">
        <h1 className="text-3xl font-medium tracking-tight">
          Let&apos;s connect<span className="text-teal-500">.</span>
        </h1>

        <p className="mt-3 max-w-md text-sm text-muted-foreground">
         Always up for a good conversation or a new project, Say hello.
        </p>

        <div className="my-5 animated-border" />

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Write to me
          </p>

          <a href="mailto:sanket7132@gmail.com"
            className="inline-flex items-center gap-2 rounded-2xl border border-teal-900/10
              bg-linear-to-br from-white/30 via-white/10 to-teal-100/50 px-4 py-2.5 text-sm font-medium
              shadow-[0_4px_14px_rgba(15,118,110,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]
              backdrop-blur-md backdrop-saturate-150 transition-colors hover:border-teal-500/45
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600
              dark:border-white/15 dark:from-white/15 dark:via-white/5 dark:to-teal-400/15
              dark:shadow-[0_4px_14px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.18)]
             ">
            <Mail size={16} strokeWidth={1.7} className="text-teal-600 dark:text-teal-400" />
            sanket7132@gmail.com
           </a>
        </div>

        <div className="my-5 animated-border" />

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Find me elsewhere
          </p>
<div className="flex flex-wrap items-center gap-x-2 gap-y-4">
  <div className="tooltip tooltip-top" data-tip="GitHub">
    <ThreeDIconButton
      label="GitHub"
      variant="soft"
      onClick={() =>
        window.open("https://github.com/Sankett111", "_blank", "noopener,noreferrer")
      }
    >
      <FaGithub size={16} />
    </ThreeDIconButton>
  </div>

  <div className="tooltip tooltip-top" data-tip="LinkedIn">
    <ThreeDIconButton label="LinkedIn" variant="soft" onClick={()=>{
      window.open("https://linkedin.com/in/sanket-nandurakar", "_blank", "noopener,noreferrer")
    }}>
      <FaLinkedinIn size={16} />
    </ThreeDIconButton>
  </div>

  <div className="tooltip tooltip-top" data-tip="Medium">
    <ThreeDIconButton label="Medium" variant="soft">
      <FaMediumM size={16} />
    </ThreeDIconButton>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
