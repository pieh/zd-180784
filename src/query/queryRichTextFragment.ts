import { graphql } from "gatsby";

export const queryRichTextFragment = graphql`
  fragment queryRichTextFragment on ContentfulRichText {
    contentful_id
    internalName
    content {
      raw
    }
  }
`;
