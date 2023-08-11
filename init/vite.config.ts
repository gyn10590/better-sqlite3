import { defineConfig } from 'vite'
import * as path from "path";
import vue from '@vitejs/plugin-vue'
import electron from "vite-plugin-electron";
// import electronRenderer from "vite-plugin-electron/renderer";
// import polyfillExports from "vite-plugin-electron/polyfill-exports";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), electron({
    entry: "src/electron/main/index.ts", // 主进程文件
  },
  {
    entry: 'src/electron/preload/index.ts'
  }),
  // electronRenderer(),
  // polyfillExports(),
  ],
  build: {
    emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
    outDir: "dist-electron"
  },
})
