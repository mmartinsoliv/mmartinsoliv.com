import { gql } from 'graphql-request'

export const GET_POSTS = gql`
  query getPosts {
    posts(orderBy: publication_DESC) {
      id
      title
      slug
      description
      details {
        html
      }
      publication
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      description
      details {
        html
      }
      publication
    }
  }
`
