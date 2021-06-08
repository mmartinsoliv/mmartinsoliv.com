import client from 'graphql/client'
import { GetStaticProps } from 'next'

import { GetPostBySlugQuery, GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POST_BY_SLUG, GET_POSTS } from 'graphql/queries'
import SlugTemplate, { SlugTemplateProps } from 'templates/Slug'
import Header from 'components/Header'

function Post({ post }: SlugTemplateProps) {
  return (
    <>
      <Header />
      <SlugTemplate post={post} />
    </>
  )
}

export async function getStaticPaths() {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  const paths = posts.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!post) return { notFound: true }

  return {
    props: {
      post
    }
  }
}

export default Post
