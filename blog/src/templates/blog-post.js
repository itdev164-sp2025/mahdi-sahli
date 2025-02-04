import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const { title, body } = data.contentfulBlogPost;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{body}</p> {/* body is a plain string now */}
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      body
    }
  }
`;

export default BlogPost;
