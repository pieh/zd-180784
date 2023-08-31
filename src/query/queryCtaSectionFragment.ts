import { graphql } from "gatsby";

export const queryCtaSectionFragment = graphql`
  fragment queryCtaSectionFragment on ContentfulCtaSection {
    contentful_id
    header
    buttons {
      contentful_id
      buttonText
      buttonAction
      buttonLink
      isUsingSecondaryButtonTheme
      isUsingDarkButtonTheme
    }
  }
`;
