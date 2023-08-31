import type { GatsbyNode } from "gatsby";
import { generatePreviewPages } from "./src/pageTemplates/previewPages";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  generatePreviewPages(graphql, createPage);
};
