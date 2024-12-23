import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    mode: "production",
    entry: {
      index: "./src/index.js",
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "module",
      },
      globalObject: "this",
    },
    experiments: {
      outputModule: true,
    },
  },
];
