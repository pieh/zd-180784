import type { GatsbyNode } from "gatsby";
import { generatePreviewPages } from "./src/pageTemplates/previewPages";
var SegfaultHandler = require("segfault-handler");

SegfaultHandler.registerHandler("crash.log");

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  generatePreviewPages(graphql, createPage);
};

export const createSchemaCustomization = () => {
  // just to make sure this module is included in graphql-engine
};
