import RepoCard from "@/components/repo-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-10">
      <RepoCard
        name="facebook/react"
        createdAt="almost 11 years ago"
        description="The library for web and native user interfaces."
        languages={{
          JavaScript: 93.79,
          HTML: 2.72,
          CSS: 1.45,
          "C++": 1.0,
          TypeScript: 0.48,
          CoffeeScript: 0.39,
          C: 0.12,
          Shell: 0.05,
          Python: 0.01,
          Makefile: 0.0,
        }}
        tags={[
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ]}
        stars={220201}
        watchers={220201}
        forks={44998}
        lastUpdated="Mar 17, 2024"
        links={["https://react.dev", "https://github.com/facebook/react"]}
        license="MIT License"
      />
    </main>
  );
}
