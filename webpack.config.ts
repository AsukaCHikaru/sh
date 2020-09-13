import * as path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/client/main.ts",
  context: path.resolve(__dirname),
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.svelte$/,
        use: "svelte-loader",
      },
    ],
  },
};

export default config;
