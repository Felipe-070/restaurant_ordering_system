import { createClient } from '@supabase/supabase-js'
import process from 'process';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_SECRET_KEY!;

const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
);

export default supabase;