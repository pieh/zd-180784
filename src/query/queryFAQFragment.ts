import { graphql } from "gatsby";

export const queryFAQFragment = graphql`
  fragment queryFAQFragment on ContentfulSectionFaq {
    contentful_id
    title
    questionList {
      title
      description {
        description
      }
    }
  }
`;
