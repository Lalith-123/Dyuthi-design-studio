import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const generateDesignConcept = async (
  userPrompt: string,
): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class minimalist architect and interior design consultant known for avant-garde, monochrome, and timeless aesthetics. 
      
      The user is asking for design advice or a concept description based on this input: "${userPrompt}".
      
      Provide a sophisticated, abstract, yet practical design concept description (max 150 words). Focus on materials, light, space, and the philosophy of "less is more". 
      Do not use markdown formatting like bolding or headers. Keep it like a stream of consciousness or a poetic architectural brief.`,
    });
    return response.text || "Unable to generate concept at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our design AI is currently contemplating new forms. Please try again later.";
  }
};
