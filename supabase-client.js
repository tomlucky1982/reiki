import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://jfghfivqjekwaojckesm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmZ2hmaXZxamVrd2FvamNrZXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2ODY0NjMsImV4cCI6MjA4OTI2MjQ2M30.9z1SHXqxzJcjIdg9JS88nLCOO3tvywg6BdUOREK7B-k'

export const supabase = createClient(supabaseUrl, supabaseKey)
