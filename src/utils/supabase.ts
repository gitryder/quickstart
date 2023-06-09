import { createClient } from '@supabase/supabase-js';
import { ENV } from '../constants/env';

const supabaseUrl = ENV.SUPABASE_URL ?? '';
const supabaseKey = ENV.SUPABASE_API_KEY ?? '';

const Supabase = createClient(supabaseUrl, supabaseKey);

export { Supabase };
