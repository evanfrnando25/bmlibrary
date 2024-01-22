// vite.config.ts
import { defineConfig } from "file:///C:/Users/evans/buma/bmlibrary/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///C:/Users/evans/buma/bmlibrary/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import typescript2 from "file:///C:/Users/evans/buma/bmlibrary/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import dts from "file:///C:/Users/evans/buma/bmlibrary/node_modules/vite-plugin-dts/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/Users/evans/buma/bmlibrary/node_modules/vite-plugin-static-copy/dist/index.js";
import sassDts from "file:///C:/Users/evans/buma/bmlibrary/node_modules/vite-plugin-sass-dts/dist/index.js";
import cssInjectedByJsPlugin from "file:///C:/Users/evans/buma/bmlibrary/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
var __vite_injected_original_dirname = "C:\\Users\\evans\\buma\\bmlibrary";
var vite_config_default = defineConfig({
  base: "",
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
      insertTypesEntry: true
    }),
    sassDts(),
    cssInjectedByJsPlugin(),
    viteStaticCopy({
      targets: [
        { src: "src/assets/bmlibrary.scss", dest: "dist/assets" },
        { src: "src/assets/scss", dest: "dist/assets" }
      ]
    }),
    typescript2({
      check: false,
      include: ["src/library/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ["vite.config.ts"]
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: "src/library/index.ts",
      name: "bmlibrary",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `bmlibrary.${format}.js`
    },
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "src/library/main.ts")
      },
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css")
            return "bmlibrary.min.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__vite_injected_original_dirname, "./src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxldmFuc1xcXFxidW1hXFxcXGJtbGlicmFyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZXZhbnNcXFxcYnVtYVxcXFxibWxpYnJhcnlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2V2YW5zL2J1bWEvYm1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnOyAgXG5pbXBvcnQgdHlwZXNjcmlwdDIgZnJvbSAncm9sbHVwLXBsdWdpbi10eXBlc2NyaXB0Mic7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5J1xuaW1wb3J0IHNhc3NEdHMgZnJvbSAndml0ZS1wbHVnaW4tc2Fzcy1kdHMnXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnJyxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzXCI7YFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGNzc0luamVjdGVkQnlKc1BsdWdpbigpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICAgIHNhc3NEdHMoKSxcbiAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oKSxcbiAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHsgc3JjOiBcInNyYy9hc3NldHMvYm1saWJyYXJ5LnNjc3NcIiwgZGVzdDogXCJkaXN0L2Fzc2V0c1wiIH0sXG4gICAgICAgIHsgc3JjOiBcInNyYy9hc3NldHMvc2Nzc1wiLCBkZXN0OiBcImRpc3QvYXNzZXRzXCIgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gICAgdHlwZXNjcmlwdDIoe1xuICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgaW5jbHVkZTogW1wic3JjL2xpYnJhcnkvKiovKi52dWVcIl0sXG4gICAgICB0c2NvbmZpZ092ZXJyaWRlOiB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgICAgICAgc291cmNlTWFwOiB0cnVlLFxuICAgICAgICAgIGRlY2xhcmF0aW9uOiB0cnVlLFxuICAgICAgICAgIGRlY2xhcmF0aW9uTWFwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGV4Y2x1ZGU6IFtcInZpdGUuY29uZmlnLnRzXCJdLFxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2xpYnJhcnkvaW5kZXgudHNcIixcbiAgICAgIG5hbWU6IFwiYm1saWJyYXJ5XCIsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiLCBcInVtZFwiXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgYm1saWJyYXJ5LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9saWJyYXJ5L21haW4udHMnKSxcbiAgICAgIH0sXG4gICAgICBleHRlcm5hbDogW1widnVlXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSBcIm1haW4uY3NzXCIpIHJldHVybiBcImJtbGlicmFyeS5taW4uY3NzXCI7XG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6IFwiVnVlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgICAgfVxuICAgIF1cbiAgfSxcbn0pO1xuXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVIsU0FBUyxvQkFBb0I7QUFDaFQsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxzQkFBc0I7QUFDL0IsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sMkJBQTJCO0FBUGxDLElBQU0sbUNBQW1DO0FBVXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLHNCQUFzQjtBQUFBLElBQ3RCLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLHNCQUFzQjtBQUFBLElBQ3RCLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQLEVBQUUsS0FBSyw2QkFBNkIsTUFBTSxjQUFjO0FBQUEsUUFDeEQsRUFBRSxLQUFLLG1CQUFtQixNQUFNLGNBQWM7QUFBQSxNQUNoRDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsU0FBUyxDQUFDLHNCQUFzQjtBQUFBLE1BQ2hDLGtCQUFrQjtBQUFBLFFBQ2hCLGlCQUFpQjtBQUFBLFVBQ2YsUUFBUTtBQUFBLFVBQ1IsV0FBVztBQUFBLFVBQ1gsYUFBYTtBQUFBLFVBQ2IsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTLENBQUMsZ0JBQWdCO0FBQUEsSUFDNUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGNBQWM7QUFBQSxJQUNkLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLE9BQU8sS0FBSztBQUFBLE1BQzVCLFVBQVUsQ0FBQyxXQUFXLGFBQWEsTUFBTTtBQUFBLElBQzNDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDaEQ7QUFBQSxNQUNBLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUztBQUFZLG1CQUFPO0FBQzFDLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3pDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
