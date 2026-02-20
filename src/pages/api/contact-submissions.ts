import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://database.altan.ai';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { first_name, last_name, email, company_phone, message } = req.body;

      // Validate required fields
      if (!first_name || !last_name || !email || !message) {
        return res.status(400).json({
          error: 'Missing required fields: first_name, last_name, email, message'
        });
      }

      // Insert into database
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name,
            last_name,
            email,
            company_phone: company_phone || null,
            message,
            status: 'New',
            source: 'Website Contact Form',
            submission_date: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to save submission to database' });
      }

      console.log('✅ Contact submission saved to database:', data[0]);

      return res.status(200).json({
        success: true,
        id: data[0].id,
        message: 'Submission saved successfully'
      });

    } catch (error) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to fetch submissions' });
      }

      return res.status(200).json(data || []);

    } catch (error) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}