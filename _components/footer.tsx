import RollingClock from "./RollingClock";

export default function Footer() {
  return (
    <footer className="w-full bg-background px-4 pb-2 pt-4 text-foreground">
      <div className="mx-auto w-full max-w-175">
        <blockquote className="text-md text-center leading-3 italic text-muted-foreground max-sm:text-balance max-sm:leading-5">
          &quot;It&apos;s just a matter of time before everyone returns to nothing.&quot;
        </blockquote>

        <div className="mt-10 flex w-full items-center justify-between font-mono text-md text-muted-foreground">
          <small>©2026</small>

          <small>
            Designed &amp; Made with <span>💚</span>
          </small>

          <RollingClock hour12={true} className="text-xs" />
        </div>
      </div>
    </footer>
  );
}
