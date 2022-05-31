import { createClient } from "@supabase/supabase-js";
import {
    REACT_APP_SUPERBASE_KEY,
    REACT_APP_SUPERBASE_URL,
} from "../../../../secrets.json";

const supabase = createClient(REACT_APP_SUPERBASE_URL, REACT_APP_SUPERBASE_KEY);
export default supabase;
