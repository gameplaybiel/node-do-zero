import 'dotenv/config'
import postgres from "postgres";

const URL = 'postgresql://neondb_owner:npg_kju9TEoGd0fH@ep-holy-term-a5a62glv.us-east-2.aws.neon.tech/neondb?sslmode=require';

export const sql = postgres(URL, {ssl: 'require' })