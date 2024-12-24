import path from "path";
import TerserPlugin from "terser-webpack-plugin";
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
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
        }),
      ],
    },
  },
  {
    // CJS configuration
    mode: "production",
    output: {
      filename: "main.cjs",
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "commonjs2",
      },
      globalObject: "this",
    },
  },
];
