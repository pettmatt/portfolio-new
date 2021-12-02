import ReactMarkdown from 'react-markdown'
import Gridlist from './Gridlist'
import Projects from './Projects'

export default function Experience({description, projects, toolkit, toolkitDesc}) {

  return (
    <div id="experience" className="section">
      <h1>Experience</h1>

      {<ReactMarkdown>{ description }</ReactMarkdown>}

      <Projects 
        projects={ projects } />

      <div id="skill-list">
        <Gridlist 
          toolkit={toolkit}
          toolkitDesc={toolkitDesc} />
      </div>
    </div>
  )
}