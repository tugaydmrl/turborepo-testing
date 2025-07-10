import { Button } from "@repo/ui/button";
import { Editor } from "@repo/editor/editor";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button appName="Test app">Hello from app!</Button>
      <Editor>Editor</Editor>
    </div>
  );
}
