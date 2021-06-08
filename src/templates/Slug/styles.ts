import styled from 'styled-components'

export const Wrapper = styled.article`
  max-width: 1440px;
  margin: 60px auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 42px;
    text-align: center;
  }

  div {
    max-width: 720px;
    text-align: start;
    font-size: 22px;
    line-height: 38px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    max-width: 560px;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 38px;
    }

    div {
      max-width: 320px;
    }
  }

  @media (max-width: 320px) {
    div {
      max-width: 280px;
      font-size: 18px;
    }
  }
`
