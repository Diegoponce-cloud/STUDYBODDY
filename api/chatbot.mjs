import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Missing question' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Chatbot configuration error' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const context = `
      Eres un asistente experto para StudyBuddy. StudyBuddy es una plataforma donde estudiantes universitarios encuentran grupos de estudio.
      Reglas:
      - Responde solo sobre la plataforma StudyBuddy.
      - Información clave: Ayuda a encontrar grupos, los estudiantes se inscriben con nombre y correo, cada inscripción da un folio, la inscripción se consulta con el folio, existen modalidades presenciales y virtuales, objetivo es facilitar grupos de estudio.
      - Si la pregunta no es sobre StudyBuddy, indica amablemente que solo puedes ayudar con temas relacionados a la plataforma.
    `;

    const prompt = `${context}\n\nPregunta: ${question}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ answer: text });
  } catch (error) {
    console.error('Chatbot error:', error);
    return res.status(500).json({ error: 'Error procesando tu pregunta' });
  }
}
