"use client";

import { ReactNode } from "react";

interface EditorProps {
  children: ReactNode;
  className?: string;
}

export const Editor = ({ children, className }: EditorProps) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "8px",
        marginLeft: "8px",
        width: "200px",
      }}
    >
      {children}
    </div>
  );
};
