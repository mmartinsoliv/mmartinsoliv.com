import { NextSeo } from 'next-seo'
import { styled } from '../../stitches.config';
import Base from '../layout/Base';

export async function getStaticProps() {
    const meta = {
        title: 'About // Matheus Martins',
        description: "I'm a UI developer based in São Paulo. I'm interested in design systems, user/dev experience and under engineering."
    }

    return { props: meta }
}

export default function About(props) {
    const { title, description } = props

    const renderIntro = () => (
      <Container>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            I'm a UI developer based in São Paulo. I'm interested in design systems, user/dev experience and under engineering.
          </Paragraph>
          <Paragraph>
            I'm currently the <strong>UI developer</strong> at
            Mercado Livre.
          </Paragraph>
          <Paragraph>
            Previously, I worked at Gympass. Where I was maintainer Yoga design system.
          </Paragraph>
        </Section>
      </Container>
    )

    return (
      <>
        <NextSeo 
          title={title}
          description={description}
        />
        <Base>
          {renderIntro()}
        </Base>
      </>
    )
}

const Container = styled('div', {
    padding: '0 20px',
    '@bp2': { margin: '15px 0' }
})

const Paragraph = styled('p', {
    '@bp2': { margin: '15px 0' },
})
  
const Section = styled('div', {
    marginTop: '0px',
    width: 'auto',
    '@bp2': { width: '48%' },
})