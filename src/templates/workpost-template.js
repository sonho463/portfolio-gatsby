import * as React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";

const WorkPost = ({ data }) => {
  const worksEdges = data.allMicrocmsWorksMain.edges;
  return <Layout></Layout>;
};

export const query = graphql`
  query {
    allMicrocmsWorksMain(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          works_title
          id
          works_image {
            url
          }
        }
      }
    }
  }
`;

export default WorkPost;
