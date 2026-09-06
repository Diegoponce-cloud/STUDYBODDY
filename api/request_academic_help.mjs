import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { course, help_type, modality, student_name, student_email } = req.body;

  if (!course || !help_type || !modality || !student_name || !student_email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const folio = 'SB-H-' + Math.floor(100000 + Math.random() * 900000);

  const { error } = await supabase
    .from('academic_help_requests')
    .insert([
      {
        folio,
        course,
        help_type,
        modality,
        student_name,
        student_email,
        status: 'pending'
      }
    ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ folio, status: 'pending' });
}