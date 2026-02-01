"use server";

import { generateAntarcticaContent, GenerateAntarcticaContentInput } from "@/ai/flows/generate-antarctica-content";
import { unstable_cache as cache } from "next/cache";

export const getAntarcticaContent = cache(
  async (input: GenerateAntarcticaContentInput) => {
    try {
      const output = await generateAntarcticaContent(input);
      return output.content;
    } catch (error) {
      console.error("Error generating content:", error);
      return "<p>We're sorry, but we couldn't retrieve the content at this moment. The Antarctic servers might be frozen. Please try again later.</p>";
    }
  },
  ['antarctica-content'],
  { revalidate: 60 * 60 * 24 } // Cache for 24 hours
);
