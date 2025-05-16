import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cdluushtbbvgrfhmrhez.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkbHV1c2h0YmJ2Z3JmaG1yaGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTg2NTUsImV4cCI6MjA2Mjk5NDY1NX0.v0wWkX4Kpk--zSEcuSz1veDn_5WoyBMBBJgF29Uc3Y4';
export const supabase = createClient(supabaseUrl, supabaseKey);