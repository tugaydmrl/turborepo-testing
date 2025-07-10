"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
      }}
      onClick={() => alert(`Hello from your ${appName} app! I updated package`)}
    >
      {children}
    </button>
  );
};
