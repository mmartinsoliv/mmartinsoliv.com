import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 80px;

  h3 {
    font-size: 32px;
    color: #ece9e4;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    margin-top: 90px;
    align-items: center;
  }
`

export const Post = styled.article`
  max-width: 546px;
  width: 100%;
  margin: 20px 0;
  background-color: #111111;
  padding: 32px;
  cursor: pointer;
  border-radius: 20px;

  h4 {
    font-size: 24px;
    line-height: 32px;
    color: #ece9e4;
  }

  p {
    margin-top: 10px;
    color: #9e9e9e;
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 546px) {
    width: 300px;
  }
`
