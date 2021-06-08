import React from 'react'

import * as S from './styles'

import Header from 'components/Header'
import Main from 'components/Main'
import { PostProps } from 'components/Post'

const HomeTemplate = ({ posts, heading }: PostProps) => {
  return (
    <S.Container>
      <Header />
      <Main posts={posts} heading={heading} />
    </S.Container>
  )
}

export default HomeTemplate
