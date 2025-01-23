import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gygpgtivmfhpwngjbprl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5Z3BndGl2bWZocHduZ2picHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NjI2NDMsImV4cCI6MjA1MzIzODY0M30.gpHBwacq9CF1f3L4hnvCi95x_wcxnclcp9ec7Kt__pw";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
