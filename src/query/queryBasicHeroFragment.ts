import { graphql } from "gatsby";

export const queryBasicHeroFragment = graphql`
  fragment queryBasicHeroFragment on ContentfulBasicHero {
    contentful_id
    header
    subheader
    buttonText
    buttonLink
    secondButtonText
    secondButtonLink
    subnote
    subnoteLink
    subnoteLinkOpensInNewTab
    hasSearchBar
    backgroundImageDesktop {
      gatsbyImageData(formats: [AUTO, AVIF, WEBP])
      description
    }
    backgroundImageTablet {
      gatsbyImageData(formats: [AUTO, AVIF, WEBP])
      description
    }
    backgroundImageMobile {
      gatsbyImageData(formats: [AUTO, AVIF, WEBP])
      description
    }
  }
`;
