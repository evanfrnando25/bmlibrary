import { defineConfig } from 'vite';
import { resolve } from "path"
import vue from '@vitejs/plugin-vue';  
import typescript2 from 'rollup-plugin-typescript2';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import sassDts from 'vite-plugin-sass-dts'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


export default defineConfig({
  base: '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
    }),
    sassDts(),
    cssInjectedByJsPlugin(),
    viteStaticCopy({
      targets: [
        { src: "src/assets/bmlibrary.scss", dest: "dist/assets" },
        { src: "src/assets/scss", dest: "dist/assets" },
      ],
    }),
    typescript2({
      check: false,
      include: ["src/library/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"],
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: "src/library/index.ts",
      name: "bmlibrary",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `bmlibrary.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/library/main.ts'),
      },
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") return "bmlibrary.min.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, './src')
      }
    ]
  },
});


