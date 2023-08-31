import { graphql } from "gatsby";

export const queryBodyPartSelectorFragment = graphql`
  fragment queryBodyPartSelectorFragment on ContentfulBodyPartSelector {
    contentful_id
    ctaButtonLink
    ctaButtonText
    bodyPartNavigator {
      body
      bodyPartImage {
        gatsbyImageData
        description
      }
      contentful_id
      title
      highlightedBodyParts
    }
    header
    subheader
  }
`;
