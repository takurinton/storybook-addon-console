import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.js"],
  dts: {
    entry: ["./src/index.js"],
  },
  format: ["cjs", "esm"],
  splitting: false,
  clean: true,
  loader: {
    ".js": "jsx",
  },
  tsconfig: "tsconfig.json",
});
