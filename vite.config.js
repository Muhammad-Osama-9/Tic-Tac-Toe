import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Tic-Tac-Toe/', // Use hyphens (-) to match the repository name
});