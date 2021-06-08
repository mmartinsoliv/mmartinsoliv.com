import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos'
import * as S from './styles'

const SocialLinks = () => (
  <S.Wrapper>
    <S.Ul>
      <li>
        <a href="/">
          <Github size={22} />
        </a>
      </li>
      <li>
        <a href="/">
          <Linkedin size={22} />
        </a>
      </li>
      <li>
        <a href="/">
          <Twitter size={22} />
        </a>
      </li>
    </S.Ul>
    <S.UlMobile>
      <li>
        <a href="/">
          <Github size={22} />
        </a>
      </li>
      <li>
        <a href="/">
          <Linkedin size={22} />
        </a>
      </li>
      <li>
        <a href="/">
          <Twitter size={22} />
        </a>
      </li>
    </S.UlMobile>
  </S.Wrapper>
)

export default SocialLinks
