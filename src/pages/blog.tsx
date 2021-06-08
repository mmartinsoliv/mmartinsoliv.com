import client from 'graphql/client'
import { GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS } from 'graphql/queries'

import { PostProps } from 'components/Post'
import BlogTemplate from 'templates/Blog'

export default function Blog({ posts }: PostProps) {
  return (
    <>
      <BlogTemplate posts={posts} heading="Posts" />
    </>
  )
}

export async function getStaticProps() {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  return {
    props: {
      posts
    }
  }
}
