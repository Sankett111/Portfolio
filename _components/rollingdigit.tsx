
"use client";

export default function RollingDigit({ value }: { value: string }) {
  const digit = Number(value);

  return (
    <span className="relative inline-flex h-[1em] w-[0.55em] overflow-hidden">
      <span
        className="absolute left-0 top-0 flex flex-col transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(-${digit * 10}%)`,
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className="flex h-[1em] items-center justify-center"
          >
            {i}
          </span>
        ))}
      </span>
    </span>
  );
}
