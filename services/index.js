import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHKHS_ENPOINT;

export const getPosts = async () => {
  const query = gql`
    query fetchPosts {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
