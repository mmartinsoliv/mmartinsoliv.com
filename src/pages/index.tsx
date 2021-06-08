import client from 'graphql/client'
import HomeTemplate from 'templates/Home'

import { GetPostsQuery } from 'graphql/generated/graphql'

import { GET_POSTS } from 'graphql/queries'

import {  PostProps } from 'components/Post'

export default function Home({ posts, heading="Últimos publicações" }: PostProps) {
  return <HomeTemplate posts={posts} heading={heading}  />
}

export const getStaticProps = async () => {

  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  return {
    props: {
      posts: posts.slice(0, 2)
    }
  }
}
