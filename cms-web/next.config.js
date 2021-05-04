const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
// import withBundleAnalyzer from "@zeit/next-bundle-analyzer";

module.exports = withBundleAnalyzer({
  distDir: ".next", // 빌드 파일을 저장할 디렉토리 (default: .next)
  analyzeServer: ["server", "both"].includes(process.env.ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "analyze/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "analyze/client.html",
    },
  },
  compress: process.env.MODE_ENV === "production",
  webpack(config) {
    // console.log(config);
    const prod = process.env.MODE_ENV === "production";
    // 원래 기본 next.js 의 webpack 설정에 custom 설정 추가
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      // 소스코드 숨기면서 에러 시 소스맵 제공 : 빠르게 웹팩 적용
    };
  },
});
