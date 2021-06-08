import Link from 'next/link'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.png" alt="logo" />
    <S.MenuNav>
      <S.Menu>
        <S.MenuList>
          <Link href="/">
            <a> Home </a>
          </Link>
        </S.MenuList>
        <S.MenuList>
          <Link href="/blog">
            <a> Blog </a>
          </Link>
        </S.MenuList>
      </S.Menu>
    </S.MenuNav>
  </S.Wrapper>
)

export default Header
