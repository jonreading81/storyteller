"use client";

import { useStories } from "@/hooks/useStories";

export default function () {
  const stories = useStories();

  console.log({ stories });

  return (
    <>
      <h3>Stories component</h3>
      {stories.map(({ name }) => (
        <p>{name}</p>
      ))}
    </>
  );
}
