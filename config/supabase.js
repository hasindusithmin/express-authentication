require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://obkjeuaammnhmifnnyyh.supabase.co',process.env.SUPA_KEY_TECH_STROME)

module.exports = supabase;