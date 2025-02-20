import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        title
        slug
        body
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const posts = data?.allContentfulBlogPost?.nodes || [];

  if (posts.length === 0) {
    return (
      <Layout>
        <h1>No blog posts found</h1>
        <p>Make sure you have published posts in Contentful.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Blog Posts</h1>
      <div className={styles.blogList}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.blogPost}>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.body ? `${post.body.substring(0, 150)}...` : "No excerpt available."}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;


