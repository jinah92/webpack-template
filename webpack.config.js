const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정 (default folder : dist, default file : entry 파일명)
  output: {
    // path: path.resolve(__dirname, "dist"), // 절대경로가 필요 (__dirname : 현재파일이 있는 경로)
    // filename: "main.js",
    clean: true, // 기존 번들 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // html에 js파일이 읽은 내용을 해석
          "css-loader", // js 파일에서 읽어온 css파일 해석
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"], // babel 적용
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
