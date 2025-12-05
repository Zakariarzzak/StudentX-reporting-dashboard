import { GoogleGenAI } from "@google/genai";
import { Exercise } from '../types';

// NOTE: In a production app, the API key should be proxied through a backend to keep it secret.
// For this client-side demo, we assume process.env.API_KEY is available or user provides it.

let aiClient: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const isAIConfigured = () => !!aiClient;

export const getAIHint = async (exercise: Exercise, currentCode: string): Promise<string> => {
  if (!aiClient) return "AI Key not configured. Using static hint: " + exercise.hints[0];

  try {
    const prompt = `
      You are an expert ethical hacking tutor. The student is working on this exercise:
      Title: ${exercise.title}
      Description: ${exercise.description}
      Current Code: 
      ${currentCode}

      The student is stuck. Provide a helpful hint without giving away the complete solution directly. 
      Focus on the logic or the specific Python/syntax concept they are missing.
      Keep it brief (max 2 sentences).
    `;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate hint.";
  } catch (error) {
    console.error("AI Hint Error", error);
    return "Error connecting to AI Tutor. Check your internet or API Key.";
  }
};

export const validateWithAI = async (exercise: Exercise, code: string): Promise<{ isCorrect: boolean; feedback: string; output?: string }> => {
  if (!aiClient) {
    // Fallback Mock Validation
    return {
      isCorrect: code.length > 20,
      feedback: "AI unavailable. Mock validation passed based on code length.",
      output: "Simulated Output..."
    };
  }

  try {
    const prompt = `
      You are a code validator for an ethical hacking course.
      Exercise: ${exercise.title} - ${exercise.description}
      Student Code:
      ${code}

      1. Analyze if the code correctly solves the problem.
      2. If it works, predict the output.
      3. Return ONLY a JSON object (no markdown) with this structure:
      {
        "isCorrect": boolean,
        "feedback": "Short constructive feedback",
        "output": "Predicted stdout of the code"
      }
    `;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("AI Validation Error", error);
    return {
      isCorrect: false,
      feedback: "Validation failed due to API error.",
      output: "Error"
    };
  }
};
