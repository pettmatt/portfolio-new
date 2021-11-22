import Gridlist from './Gridlist'
import Projects from './Projects'

export default function Experience({description}) {
  return (
    <div id="experience" className="section">
      <h1>Experience</h1>
      <p>{ description }</p>

      <Projects />

      <div className="decoration-text"><h3>Skills</h3></div>

      <div id="skill-list">
        <Gridlist />
      </div>
    </div>
  )
}