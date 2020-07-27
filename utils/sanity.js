/**
 * Sanity Client
 * Initialises the Sanity JS client to retrieve documents
 */
require("dotenv").config();

const client = require("@sanity/client");

/**
 * Retrieve Sanity config from client-config
 */
const { sanity } = require("../client-config");

module.exports = client({
  ...sanity,
  useCdn: !process.env.SANITY_READ_TOKEN,
  token: process.env.SANITY_READ_TOKEN
});
