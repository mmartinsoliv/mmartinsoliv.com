import Header from 'components/Header'
import Post, { PostProps } from 'components/Post'

import * as S from './styles'

export default function Blog({ posts, heading }: PostProps) {
  return (
    <>
      <Header />
      <S.Wrapper>
        <Post posts={posts} heading={heading} />
      </S.Wrapper>
    </>
  )
}
