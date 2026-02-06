import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "ApexBot", the friendly and knowledgeable AI counselor for Apex Coaching Institute. 
Your goal is to help prospective students and parents understand our offerings.

Key Info about Apex Coaching:
- **Courses**: 
  1. **Foundation (Class 9-10)**: Strong basics for future exams. Duration: 1 Year.
  2. **JEE Main & Advanced**: Engineering entrance prep. Duration: 2 Years.
  3. **NEET Medical**: Medical entrance prep. Duration: 2 Years.
- **Why Us?**: Top faculty, 1:1 mentorship, modern labs, digital library.
- **Location**: BITS Pilani Goa Campus, Zuarinagar, Goa.
- **Contact**: contact@apexcoaching.com

Guidelines:
- Keep answers concise (under 3 sentences unless asked for details).
- Be encouraging and professional.
- If unsure about specific fees or schedules not mentioned here, ask them to visit the 'Contact' page.
- Do not make up false information.
`;

export const streamChatResponse = async (
  history: { role: string; text: string }[],
  newMessage: string
) => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: chatHistory,
    });

    const result = await chat.sendMessageStream({ message: newMessage });
    return result;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    throw error;
  }
};