// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
  

// // })

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'build', // Output directory for compiled files
//     rollupOptions: {
//       input: {
//         main: '/src/App.jsx', // Specify App.jsx as the entry point
//       },
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory for compiled files
    rollupOptions: {
      input: {
        main: '/src/App.jsx', // Adjust the path if necessary
      },
    },
  },
});
