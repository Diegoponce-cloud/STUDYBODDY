import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { folio } = req.query;

  if (!folio) {
    return res.status(400).json({ error: 'Folio is required' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const { data, error } = await supabase
    .from('group_registrations')
    .select('*')
    .eq('folio', folio)
    .single();

  if (error || !data) {
    return res.status(404).json({ error: 'Registration not found' });
  }

  return res.status(200).json(data);
}
