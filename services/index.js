import { Request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts =  async (req, res, next) => {
    const query = gql `
            query MyQuery {
                postsConnection {
                edges {
                    node {
                    author {
                        description
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
            
      
        `
        const results = await request(graphqlAPI, query)
        return result.postsConnection.edges;
    }
