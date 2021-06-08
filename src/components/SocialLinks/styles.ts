import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 420px;
  margin: 0 auto;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  li:first-child {
    margin-right: 20px;
  }

  li:nth-child(2) {
    margin-right: 20px;
  }

  li {
    margin: 60px 0;
    list-style: none;

    a {
      text-decoration: none;
      color: #fff;

      span {
        font-size: 14px;
        color: #ece9e4;
        display: flex;
        align-items: center;
      }

      span:hover {
        transition: 0.3s ease-in;
        color: #3cd3c1;
      }
    }

    a:hover {
      transition: 0.3s ease-in;
      color: #3cd3c1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const UlMobile = styled.ul`
  display: none;
  background: #fff;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;

    li {
      list-style: none;
      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
`
