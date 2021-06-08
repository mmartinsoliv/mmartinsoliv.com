import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.header`
  max-width: 1160px;
  margin: 30px auto;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 50px;
`

export const MenuNav = styled.nav``

export const Menu = styled.ul`
  display: flex;
`

export const MenuList = styled.li`
  padding: 10px;
  list-style: none;

  a {
    text-decoration: none;
    color: #3cd3c1;
    font-size: 18px;
    line-height: 40px;

    :hover {
      color: #fff;
      transition: 0.3s;
    }
  }
`
