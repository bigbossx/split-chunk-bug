import { defineConfig } from "@rsbuild/core";
import { commonSize } from "./common";
import path from "path";

export default defineConfig({
  output: {
    distPath: {
      root: `dist/rsbuild`,
    },
    filename: {
      js: "[name].[contenthash].js",
    },
  },
  html: {
    template: path.resolve(__dirname, "./public/index.html"),
  },
  source: {
    define: { __BUNDLE__: JSON.stringify("rsbuild") },
  },
  tools: {
    rspack(config) {
      if (config.optimization) {
        config.optimization.chunkIds = "named";
        config.optimization.moduleIds = "named";
        config.optimization.splitChunks = {
          chunks: "all",
          ...commonSize,
        };
      }
      return config;
    },
  },
  // performance: {
  //   chunkSplit: {
  //     strategy: "split-by-size",
  //     ...commonSize,
  //   },
  // },
});
