"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `
  const developer ={
  name: "Brian Riunge",
    role: "Software Developer",
    status: "Available for Code & Coffee",
    core_skills: [
      "JavaScript",
      "Python",
      "TypeScript",
      "Express js",
      "Node.js",
      "Git"
    ],
  }
`;

  return (
    <div className="max-w-3xl mx-auto w-full animate-fade-in transition-all duration-500">
      <CodeBlock language="jsx" filename="Developer.tsx" code={code} />
    </div>
  );
}
