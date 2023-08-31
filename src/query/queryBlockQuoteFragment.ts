import { graphql } from "gatsby";

export const queryBlockQuoteFragment = graphql`
  fragment queryBlockQuoteFragment on ContentfulBlockQuote {
    contentful_id
    internalName
    quote
    quoteAuthor
  }
`;
