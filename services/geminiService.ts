import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini API client
// IMPORTANT: The API key is injected via the environment variable process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = "gemini-2.5-flash";

const SYSTEM_INSTRUCTION = `
You are Nadya Cahya, a Senior Hospital Administrator and Professor of Accounting. 
Your role is to analyze Hospital ERP data.
You focus on:
1. Financial Compliance (GAAP/IFRS).
2. Revenue Cycle Management (RCM) optimization.
3. Clinical Supply Chain efficiency.
4. Fraud detection in billing.

Always answer with a professional, executive tone. Be concise but insightful.
When analyzing data, look for anomalies, cost-saving opportunities, and compliance risks.
`;

export const sendMessageToGemini = async (
  message: string,
  contextData?: any
): Promise<string> => {
  try {
    let prompt = message;
    
    if (contextData) {
      prompt += `\n\n[CURRENT SYSTEM DATA CONTEXT]:\n\`\`\`json\n${JSON.stringify(contextData, null, 2)}\n\`\`\``;
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2, // Low temperature for analytical consistency
      },
    });

    return response.text || "I apologize, but I could not generate an analysis at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI services. Please check your API key.";
  }
};