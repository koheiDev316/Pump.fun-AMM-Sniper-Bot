const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/autoSniper.ts", "./src/singleSniper.ts"],
    outdir: "./dist",
    bundle: true,
    platform: "node",
    format: "cjs",
    external: ["ws"],
  })
  .catch(() => process.exit(1));
