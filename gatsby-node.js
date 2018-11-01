require('dotenv').config();

const createPageLoader = require('./src/utils/createPageLoader');


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const isPreview = process.env.PREVIEW_MODE === 'true';
  // Use the resulting list to create page loaders for each page type
  return createPageLoader(graphql, createPage, isPreview);
};
