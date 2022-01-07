import React from 'react' 
import { MDXProvider } from "@mdx-js/react"
import { Headings,Code,Blockquote } from './src/components/Complete'

// const myH2 = props => {
//   return <h2 {...props}>{props.children}</h2>
// }

// const Testing = ({children}) => {
//   return <code className='code'>{children}</code>
// }

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
}

export const wrapMDX = ({ element }) =>{
  return <MDXProvider components={components}>{element}</MDXProvider>
}
