'use server';

/**
 * @fileOverview A flow that generates detailed, factual content about Antarctica for a website.
 *
 * - generateAntarcticaContent - A function that generates the Antarctica website content.
 * - GenerateAntarcticaContentInput - The input type for the generateAntarcticaContent function.
 * - GenerateAntarcticaContentOutput - The return type for the generateAntarcticaContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAntarcticaContentInputSchema = z.object({
  topic: z.string().describe('The specific aspect of Antarctica to generate content for (e.g., History, Life, Research, Climate Impact). This can also be a request for a list of facts.'),
  wordCountTarget: z.number().describe('The target word count for the generated content. This is a guideline.'),
});

export type GenerateAntarcticaContentInput = z.infer<typeof GenerateAntarcticaContentInputSchema>;

const GenerateAntarcticaContentOutputSchema = z.object({
  content: z.string().describe('The generated HTML content about Antarctica.'),
});

export type GenerateAntarcticaContentOutput = z.infer<typeof GenerateAntarcticaContentOutputSchema>;

export async function generateAntarcticaContent(input: GenerateAntarcticaContentInput): Promise<GenerateAntarcticaContentOutput> {
  const {output} = await contentPrompt(input);
  if (!output) {
    throw new Error('AI model failed to generate content.');
  }
  return output;
}

const contentPrompt = ai.definePrompt({
  name: 'generateAntarcticaContentPrompt',
  input: {schema: GenerateAntarcticaContentInputSchema},
  output: {schema: GenerateAntarcticaContentOutputSchema},
  prompt: `Your response MUST be a raw JSON object. Do not use markdown. Do not include any text before or after the JSON.
The JSON object must have a single key: "content".
The value of "content" must be a string containing HTML.

The HTML content should be about the following topic: '{{{topic}}}'.

The HTML content should be engaging, factual, and well-structured.
- Use common HTML tags like <h2>, <h3>, <p>, and lists.
- If the topic is about facts, generate an ordered list (<ol>) of at least 10 facts.
- The HTML should end with an '<h2>References</h2>' section.

Example response format:
{"content": "<h2>Some Title</h2><p>Some paragraph...</p>"}
`,
});