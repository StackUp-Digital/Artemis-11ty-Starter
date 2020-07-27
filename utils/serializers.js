const imageUrl = require("./imageUrl");

// Learn more on https://www.sanity.io/docs/guides/introduction-to-portable-text
module.exports = {
  types: {
    code: ({ node }) => "```" + node.language + "\n" + node.code + "\n```",
    mainImage: ({ node }) =>
      `![${node.alt}](${imageUrl(node)
        .width(800)
        .url()})`
  }
};
