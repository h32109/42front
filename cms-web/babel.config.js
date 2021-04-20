module.exports = (api) => {
  api.cache(false);
  const prod = process.env.MODE_ENV === "production";
  const presets = ["next/babel"];
  const plugins = prod ? ["transform-remove-console"] : [];

  return {
    presets,
    plugins,
  };
};
