"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel: string;
  color?: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionData = {
  username: string;
  totalContributions: number;
  weeks: ContributionWeek[];
};

const levelClasses: Record<string, string> = {
  NONE: "bg-muted",
  FIRST_QUARTILE:
    "bg-[var(--scene-graph-1-light)] dark:bg-[var(--scene-graph-1-dark)]",
  SECOND_QUARTILE:
    "bg-[var(--scene-graph-2-light)] dark:bg-[var(--scene-graph-2-dark)]",
  THIRD_QUARTILE:
    "bg-[var(--scene-graph-3-light)] dark:bg-[var(--scene-graph-3-dark)]",
  FOURTH_QUARTILE:
    "bg-[var(--scene-graph-4-light)] dark:bg-[var(--scene-graph-4-dark)]",
};

function getLevelClass(level: string) {
  return levelClasses[level] ?? levelClasses.NONE;
}

const dayNames = ["Mon", "Wed", "Fri"];

function getMonthLabels(weeks: ContributionWeek[]) {
  let previousMonth = -1;

  return weeks.map((week, index) => {
    const firstDay = week.contributionDays[0];

    if (!firstDay) {
      return { index, label: "" };
    }

    const month = new Date(`${firstDay.date}T12:00:00`).getMonth();

    if (month !== previousMonth) {
      previousMonth = month;

      return {
        index,
        label: new Date(`${firstDay.date}T12:00:00`).toLocaleDateString(
          "en-US",
          { month: "short" },
        ),
      };
    }

    return { index, label: "" };
  });
}

export default function ContributionGraph() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    let cancelled = false;

    async function fetchContributions() {
      try {
        const response = await fetch("/api/github-contribution");

        if (!response.ok) {
          throw new Error("Unable to load GitHub activity.");
        }

        const result: ContributionData = await response.json();

        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setError("Couldn't load contribution activity.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchContributions();

    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = data?.weeks ?? [];
  const calendarYear = weeks.at(-1)?.contributionDays.at(-1)?.date.slice(0, 4);
  const monthLabels = getMonthLabels(weeks);

  return (
    <section className="w-full max-w-175">
      <div className="overflow-hidden rounded-2xl border border-border bg-card/30 p-4 shadow-sm shadow-foreground/2 sm:p-5">

        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm tracking-tight text-foreground sm:text-2xl">
              A little progress, every day.
            </h2>
          </div>

          {calendarYear && (
            <span className="shrink-0 rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground">
              {calendarYear}
            </span>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex h-32 items-center justify-center">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-foreground" />
              Loading contributions...
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Contribution graph */}
        {!loading && !error && data && (
          <>
            <div
              className="overflow-x-auto pb-2 scrollbar-thin"
              aria-label="GitHub contribution activity"
              tabIndex={0}
            >
              <div className="min-w-170">

                {/* Month labels */}
                <div
                  className="mb-2 grid gap-1"
                  style={{
                    gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                  }}
                >
                  {monthLabels.map(({ index, label }) => (
                    <span
                      key={index}
                      className="whitespace-nowrap text-[11px] font-medium text-muted-foreground"
                      style={{
                        gridColumn: index + 1,
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex gap-1">

                  {/* Weekday labels */}
                  <div className="mr-1 grid shrink-0 grid-rows-7 gap-0.75">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <span
                        key={index}
                        className="flex size-2.75 items-center justify-center text-[9px] text-muted-foreground"
                      >
                        {dayNames.includes(
                          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                            index
                          ],
                        )
                          ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                              index
                            ] === "Mon"
                            ? "M"
                            : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                                index
                              ] === "Wed"
                              ? "W"
                              : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                                  index
                                ] === "Fri"
                                ? "F"
                                : ""
                          : ""}
                      </span>
                    ))}
                  </div>

                  {/* Weeks */}
                  <div className="flex min-w-0 flex-1 gap-0.75">
                    {weeks.map((week, weekIndex) => (
                      <div
                        key={weekIndex}
                        className="grid flex-1 grid-rows-7 gap-0.75"
                      >
                        {week.contributionDays.map((day) => (
                          <div
                            key={day.date}
                            style={{ gridRowStart: new Date(day.date).getUTCDay() + 1 }}
                            title={`${day.contributionCount} contribution${
                              day.contributionCount === 1 ? "" : "s"
                            } on ${new Date(
                              `${day.date}T12:00:00`,
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}`}
                            aria-label={`${day.contributionCount} contributions on ${day.date}`}
                            className={`aspect-square w-full min-w-2.25 rounded-[5px] border border-border/30 transition-[background-color,transform] duration-400 hover:scale-110 hover:ring-1 hover:ring-foreground/50 dark:border-white/[0.04] ${getLevelClass(
                                        day.contributionLevel,
                            )}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {data.totalContributions.toLocaleString()}
                </span>{" "}
                contributions in the last year
              </p>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
  <span>Less</span>

           {[
            "bg-muted",
            levelClasses.FIRST_QUARTILE,
            levelClasses.SECOND_QUARTILE,
            levelClasses.THIRD_QUARTILE,
            levelClasses.FOURTH_QUARTILE,
            ].map((color, index) => (
             <span
              key={index}
              className={`size-2 rounded-lg transition-colors duration-400 ${color}`}
              />
              ))}

             <span>More</span>
             </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
