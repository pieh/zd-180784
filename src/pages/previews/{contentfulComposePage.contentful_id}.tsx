import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";

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
  query ComposePageByContentfulId($contentful_id: String!) {
    contentfulComposePage(contentful_id: { eq: $contentful_id }) {
      contentful_id
      componentList {
        ...queryComposableComponentListFragment
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 30px;
`;

// previews/4zOPOxFxrEcBCZ430SFIwh/
