import { Database } from './supabase';

export type Poll = Database['public']['Tables']['polls']['Row'];
