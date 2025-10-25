import { createClient } from "https://esm.sh/@supabase/supabase-js";

export const supabase = createClient(
  "https://YOUR-PROJECT-URL.supabase.co",
  "YOUR-ANON-KEY"
);