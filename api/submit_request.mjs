import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    nombre_estudiante,
    materia,
    tema,
    fecha_sesion,
    modalidad,
    mensaje
  } = req.body;

  const supabase = createClient(
    'https://vrtwwwcjyijzonrqusfk.supabase.co',
    process.env.SUPABASE_SERVICE_KEY
  );

  const { error } = await supabase
    .from('study_requests')
    .insert([
      {
        nombre_estudiante,
        materia,
        tema,
        fecha_sesion,
        modalidad,
        mensaje
      }
    ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Request submitted successfully' });
}
