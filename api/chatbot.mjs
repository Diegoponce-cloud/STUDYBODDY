import { OpenAI } from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Missing question' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'Chatbot configuration error' });
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const context = `
      Eres un asistente experto para StudyBuddy. StudyBuddy es una plataforma donde estudiantes universitarios encuentran grupos de estudio.
      Reglas:
      - Responde solo sobre la plataforma StudyBuddy.
      - Información clave: Ayuda a encontrar grupos, los estudiantes se inscriben con nombre y correo, cada inscripción da un folio, la inscripción se consulta con el folio, existen modalidades presenciales y virtuales, objetivo es facilitar grupos de estudio.
      - Si la pregunta no es sobre StudyBuddy, indica amablemente que solo puedes ayudar con temas relacionados a la plataforma.
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: context },
        { role: 'user', content: question }
      ],
    });

    return res.status(200).json({ answer: completion.choices[0].message.content });
  } catch (error) {
    console.error('Chatbot error:', error);
    return res.status(500).json({ error: 'Error procesando tu pregunta' });
  }
}
