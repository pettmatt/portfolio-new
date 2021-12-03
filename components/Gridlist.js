export default function Gridlist({toolkit, toolkitDesc}) {
  let list = toolkit

  return (
    <>
    <h1>Toolkit</h1>
    <p><small>
      { toolkitDesc ? 
      toolkitDesc : 
      'This section includes tools I have used regularly in personal or collaboration projects.'}
    </small></p>
    <div className='grid-list'>
      { list.map(item => (
        <div className={ item.confident ? 'grid-box' : 'grid-box' }
        key={item.id}>
          { item.deviconClass ?
              item.deviconClass.includes('-') ? 
                <i className={'devicon-' + item.deviconClass + ' colored'}></i> :
            <i className={'devicon-' + item.deviconClass + '-plain colored'}></i> :
            <i className={'no-icon colored'}>{'</>'}</i>
          }
          
          <p>{item.name}</p>
        </div>
        )
      ) }
    </div>
    </>
  )
}

// Used while building the application
// Index.js has the "real" fetching function
export async function getStaticProps() {
  // Fetch data from backend
  const res = await fetch(process.env.NEXT_PUBLIC_URL)
  const data = await res.json()

  // Forward to frontend use
  return {
    props: {
      toolkit: data.skills,
      toolkitDesc: data.toolkitDesc
    }
  }
}

// highlight class: highlighted

/**
 *             (Number(item.acquired.substring(5, 7)) - Number(thisMonth)) ?
            Number(item.acquired.substring(5, 7)) :
 */