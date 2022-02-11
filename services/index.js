import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts =  async () => {
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
            
      
        `;
        const result = await request(graphqlAPI, query)
        return result.postsConnection.edges;
    }
 export const  getRecentPosts = async ()=> {
     const query = gql `
     query GetPostDetails (){
         posts(
            orderBy:createdAt_ASC
            last: 3
            )
            {
            title
            featuredImage {
            url
            }
            createdAt
            slug
        }
     }
     `
     const result = await request(graphqlAPI, query)
        return result.posts;

 }

 export const getSimilarPost = async () => {
     // do not show the current article but disply other articles that include some of the categories that you want to get. then we want to get last 3 articles.

     const query = gql ` 
     query GetPostDetails($slug:String!
        $categories:[String!]){
            posts(
                where:{ slug_not: $slug, AND :{categories_some: {slug_in:$categories}}} 
                last:3
            ) {
                title
                featuredImage {
                url
                }
                createdAt
                slug
            }
        }
     ` 
     const result = await request(graphqlAPI, query)
        return result.posts; 
        
 }

 export const getCategories = async () => {
     const query = gql `
     query= GetCategories {
         categories {
             name
             slug
          }
     }
     
     ` // no : becuase we are working with gql not JSON 
     const result = await request(graphqlAPI, query)
        return result.categories; 

 }