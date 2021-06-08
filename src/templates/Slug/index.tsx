import * as S from './styles'

export type SlugTemplateProps = {
  post: {
    slug: string
    title: string
    details: {
      html: string
    }
  }
}

export default function SlugTemplate({ post }: SlugTemplateProps) {
  return (
    <S.Wrapper>
      <h1> {post.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: post.details.html }} />
    </S.Wrapper>
  )
}
