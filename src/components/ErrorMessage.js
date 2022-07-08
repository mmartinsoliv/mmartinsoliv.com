import { Box } from './Box'
import { styled } from '../../stitches.config'

const ErrorMessage = ({ message, code }) => {
   if(code === 404) {
       return (
           <Box>
               <Heading> {message} </Heading>
           </Box>
       )
   }

   return (
       <Box>
           <Heading>
               {message}
           </Heading>
       </Box>
   )
}

const Heading = styled('h2', {
    color: '$primary'
})

export default ErrorMessage