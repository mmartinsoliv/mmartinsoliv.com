import * as S from './styles'
import Link from 'next/link'

type Post = {
  id: string
  title: string
  description: string
  slug: string
}

export type PostProps = {
  posts: Post[]
  heading: string
}

const Post = ({ posts, heading }: PostProps) => (
  <S.Wrapper>
    <h3> {heading} </h3>
    {posts?.map((post) => (
      <Link key={post.id} href={`/post/${post.slug}`}>
        <S.Post>
          <h4> {post.title} </h4>
          <p>{post.description}</p>
        </S.Post>
      </Link>
    ))}
  </S.Wrapper>
)

export default Post
