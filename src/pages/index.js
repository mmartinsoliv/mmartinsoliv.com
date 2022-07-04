import { styled } from '../../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'


export async function getStaticProps() {
  return {
    props: {
      title: 'Matheus Martins',
      description: 'Open source enthusiast and challenge lover',
      image: '/static/images/home-bw.jpg',
    },
  }
}

export default function Index(props) {
  const { title, description, image } = props

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://www.mmartinsoliv.com/" property="og:url" />
        <meta content={`https://www.mmartinsoliv.com/${image}`} property="og:image" />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <>
              <h1>{title}</h1>
              <p>
                <strong>Software Enginner at Mercado Livre</strong>.<br />
                {description}.
              </p>
            </>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})