import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find:"@", replacement:path.resolve(__dirname,"src")}] // will replace the at anytime we see the alias and will replace with the dirname starting from source. 
  }
})
