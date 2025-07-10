import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <code
      style={{ backgroundColor: "green", padding: "5px", borderRadius: "5px" }}
      className={className}
    >
      {children}
    </code>
  );
}
