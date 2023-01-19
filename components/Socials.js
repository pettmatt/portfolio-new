export default function Continue({ socials }) {
  return (
    <div id='links' className='section'>
      <div>
        <h1>Links</h1>
        <ul>
          { socials && socials.map(social => (
            <li key={social.id}><a href={social.attributes.link}>{social.attributes.name}</a></li>
          )) }
        </ul>
      </div>
    </div>
  )
}