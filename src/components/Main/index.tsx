import Post, { PostProps } from 'components/Post'
import Sidenav from 'components/Sidenav'
import SocialLinks from 'components/SocialLinks'
import * as S from './styles'

const Main = ({ posts, heading }: PostProps) => (
  <S.Wrapper>
    <S.Content>
      <Sidenav />
      <SocialLinks />
    </S.Content>
    <Post posts={posts} heading={heading} />
  </S.Wrapper>
)

export default Main
