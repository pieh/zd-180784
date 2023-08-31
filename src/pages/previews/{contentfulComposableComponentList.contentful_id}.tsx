import React from "react";
import { graphql, PageProps } from "gatsby";

const wrapperStyles = {
  display: "flex",
  margin: 30,
};

const ContentfulComposePagePreview = ({ data }) => {
  return <div style={wrapperStyles}>{JSON.stringify(data)}</div>;
};

export default ContentfulComposePagePreview;

export async function config() {
  return () => {
    return {
      defer: true,
    };
  };
}

export const query = graphql`
  query ComposableComponentListByContentfulId($contentful_id: String!) {
    contentfulComposableComponentList(contentful_id: { eq: $contentful_id }) {
      ...queryComposableComponentListFragment
    }
  }
`;
