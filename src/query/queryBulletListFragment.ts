import { graphql } from "gatsby";

export const queryBulletListFragment = graphql`
  fragment queryBulletListFragment on ContentfulBulletList {
    contentful_id
    bulletType
    bulletColor
    header
    headerFormat
    bulletListConfig {
      body
      title
    }
  }
`;
