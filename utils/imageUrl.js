/**
 * Generate Image URLs for Sanity
 * More info: https://www.sanity.io/docs/image-urls
 */
const imageUrl = require("@sanity/image-url");
const sanityClient = require("./sanity");

function urlFor(source) {
  return imageUrl(sanityClient).image(source);
}

module.exports = urlFor;
