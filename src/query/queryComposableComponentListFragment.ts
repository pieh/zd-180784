import { graphql } from "gatsby";

export const queryComposableComponentListFragment = graphql`
  fragment queryComposableComponentListFragment on ContentfulComposableComponentList {
    contentful_id
    internalName
    components {
      type: __typename
      ...queryInteractiveCtaFragment
      ...queryBasicHeroFragment
      ...queryBodyPartSelectorFragment
      ...queryBulletListFragment
      ...queryCtaSectionFragment
      ...queryProgramFeatureFragment
      ...queryBlockQuoteFragment
      ...queryFAQFragment
      ...queryRichTextFragment
    }
  }
`;
