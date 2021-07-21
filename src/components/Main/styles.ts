import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 120px;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    margin-top: 60px;
    padding: 0 10px;
  }
`

export const Content = styled.div`
  margin-bottom: 30px;
`
