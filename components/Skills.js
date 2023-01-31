import SwiperPlugin from './Swiper'

export default function Skills({ toolkit, toolkitDesc }) {
  const confidentSkills = toolkit.filter(skill => skill.attributes.confident)
  const normalSkills = toolkit.filter(skill => !skill.attributes.confident)

  return (
    <div className="skills-toolkit">
      <h1>Toolkit</h1>
      <p><small>
        { toolkitDesc ? 
        toolkitDesc : 
        'This section includes tools that I have used regularly in projects.'}
      </small></p>
      
      <Showcase skills={confidentSkills} header={'Tools with work experience'} />
      <Showcase skills={normalSkills} header={'Familiar through studies'} />
    </div>
  )
}

function Showcase({ skills, header }) {
  const reorderedSkills = skills.sort((a, b) => {
    let aDate = new Date(a.attributes.acquired)
    let bDate = new Date(b.attributes.acquired)
    return bDate - aDate
  })

  return (
    <div className='skills-showcase centered'>
      <p className='skills-header'><b>{ header } ({ skills.length })</b></p>
      <div className='flex-list'>
        <SwiperPlugin content={ reorderedSkills } />
      </div>
    </div>
  )
}