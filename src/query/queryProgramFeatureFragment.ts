import { graphql } from "gatsby";

export const queryProgramFeatureFragment = graphql`
  fragment queryProgramFeatureFragment on ContentfulProgramFeature {
    contentful_id
    header
    subheader
    accordionContent: content {
      ... on ContentfulTitleBodyImage {
        type: __typename
        id
        title
        body {
          body
        }
        imageAltText
        mobileImage {
          gatsbyImageData(formats: [AUTO, AVIF, WEBP])
        }
        tabletImage {
          gatsbyImageData(formats: [AUTO, AVIF, WEBP])
        }
        desktopImage {
          gatsbyImageData(formats: [AUTO, AVIF, WEBP])
        }
        button {
          buttonLink
          buttonText
          isUsingSecondaryButtonTheme
          isUsingDarkButtonTheme
        }
      }
      ... on ContentfulTitleBodyVideo {
        type: __typename
        id
        title
        body {
          body
        }
        button {
          buttonLink
          buttonText
          isUsingSecondaryButtonTheme
          isUsingDarkButtonTheme
        }
      }
    }
  }
`;
