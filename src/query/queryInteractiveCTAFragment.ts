import { graphql } from "gatsby";

export const queryInteractiveCtaFragment = graphql`
  fragment queryInteractiveCtaFragment on ContentfulInteractiveCta {
    contentful_id
    internalName
    header
    searchButtonText
    notFoundButtonText
    buttonLink
    type: __typename
  }
`;
