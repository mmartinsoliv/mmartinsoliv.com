import { styled } from '../../stitches.config'
import { NextSeo } from 'next-seo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'


export async function getStaticProps() {
  return {
    props: {
      title: 'Matheus Martins',
      description: 'Open source enthusiast and challenge lover',
    },
  }
}

export default function Index(props) {
  const { title, description } = props
  return (
    <>
      <NextSeo
        title={title}
        description={description}
      />
      <Wrapper>
        <Navbar />
        <Home>
          <PostContent>
            <PostContainer>
              <>
                <h1>{title}</h1>
                <p>
                  <strong>UI developer at Mercado Livre</strong>.<br />
                  {description}.
                </p>
                <ShortcutHome />
              </>
            </PostContainer>
          </PostContent>
        </Home>
        <Footer />
      </Wrapper>
    </>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})