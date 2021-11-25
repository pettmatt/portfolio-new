import Gridlist from './Gridlist'
import Projects from './Projects'

export default function Experience({description}) {
  return (
    <div id="experience" className="section">
      <h1>Experience</h1>

      <p>{ description }</p>

      <Projects />

      <div id="skill-list">
        <Gridlist />
      </div>
    </div>
  )
}