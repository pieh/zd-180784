import { resolve } from "path";
import type { CreatePagesArgs, Actions } from "gatsby";

export const generatePreviewPages: (
  graphql: CreatePagesArgs["graphql"],
  createPage: Actions["createPage"]
) => void = (_graphql, createPage) => {
  createPage({
    path: "/",
    component: resolve(`${__dirname}/index.tsx`),
  });
};
