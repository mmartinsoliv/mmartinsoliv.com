import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { PostContainer, PostContent, PostMain } from '../components/Post'
import { Wrapper } from '../components/Wrapper'


export default function Base({ children }) {
   return (
       <Wrapper>
           <NavBar />
            <PostMain>
            <PostContent>
                <PostContainer>
                {children}
                </PostContainer>            
            </PostContent>
            </PostMain>
            <Footer />
       </Wrapper>
   )
}
  