import ReactMarkdown from 'react-markdown'
import Skills from './Skills'
import DisplayBlock from './DisplayBlock'

export default function Experience({ description, projects, toolkit, toolkitDesc }) {

  return (
    <div id='experience' className='section'>
      <h1>Experience</h1>

      {<ReactMarkdown>{ description }</ReactMarkdown>}

      <h1>Side Projects</h1>
      <DisplayBlock blocks={ projects } />

      <Skills toolkitDesc={ toolkitDesc } toolkit={ toolkit } />
    </div>
  )
}