import * as React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";

const WorkPost = ({ data }) => {
	const worksData = data.microcmsWorksMain
  return (
    <Layout>
      <h1>{worksData.works_title}</h1>
			<img src={worksData.works_image.url} alt="" />
    </Layout>
  );
};

export const query = graphql`
  query {
    microcmsWorksMain {
      works_title
			works_image{
				url
			}
    }
  }
`;

export default WorkPost;
