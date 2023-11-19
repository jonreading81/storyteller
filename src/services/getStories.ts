import { Story } from "@/types/story";

interface StoriesJSON {
  stories: Story[];
}

export const getStories = async () => {
  const stories = await fetch("http://localhost:3000/stories");
  return (await stories.json()) as StoriesJSON;
};
