module.exports = (config) => {
  config.addPassthroughCopy("img");
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("js");

  return {
    passthroughFileCopy: true,
  };
};
