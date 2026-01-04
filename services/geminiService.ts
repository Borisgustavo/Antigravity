
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getAISummary(topic: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proporciona un resumen ejecutivo de 3 puntos clave sobre el siguiente tema de IA en español para la plataforma AHORALAIA: ${topic}. Sé conciso y profesional.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });
    return response.text || "No se pudo generar el resumen.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Error al conectar con la IA de AHORALAIA.";
  }
}

export async function getAITrendInsight(): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Dime una tendencia rápida (una frase) sobre el estado actual de la IA generativa en español para el widget de noticias de AHORALAIA.",
      config: { temperature: 0.9 }
    });
    return response.text || "La IA continúa transformando industrias a un ritmo sin precedentes.";
  } catch (error) {
    return "Nuevas actualizaciones en la infraestructura de AHORALAIA.";
  }
}

export async function searchLiveNews(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `¿Cuáles son las noticias más recientes sobre ${query} en el ámbito de la IA en español? Resume 3 noticias actuales para los lectores de AHORALAIA.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    return {
      text: response.text,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => chunk.web) || []
    };
  } catch (error) {
    console.error("Search error:", error);
    return null;
  }
}
