import { useState, useEffect } from "react";
import { getStories } from "../services/getStories";
import { Story } from "@/types/story";

export const useStories = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getStories();
      setStories(data.stories);
    })();
  }, []);

  return stories;
};
