import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    curso,
    nombre,
    modalidad,
    horario
  } = req.body;

  const supabase = createClient(
    'https://vrtwwwcjyijzonrqusfk.supabase.co',
    process.env.SUPABASE_SERVICE_KEY
  );

  const { error } = await supabase
    .from('grupos_estudio')
    .insert([
      {
        curso,
        nombre,
        modalidad,
        horario
      }
    ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Grupo creado exitosamente' });
}
