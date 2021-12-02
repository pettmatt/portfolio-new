import Image from 'next/image'

export default function Gridlist({toolkit, toolkitDesc}) {
  const array = toolkit

  return (
    <>
    <h1>Toolkit</h1>
    <p><small>
      { toolkitDesc ? 
      toolkitDesc : 
      'This section includes tools I have used regularly in personal or collaboration projects.'}
    </small></p>
    <div className='grid-list'>
      { array.map(item => (
        <div className={ item.confident ? 'grid-box' : 'grid-box' } 
        key={item.id}>
          {//<Image id="background" src={'http://localhost:8085' + item.background.url} 
          /*alt={item.name + ' image'} width="100" height="100" />*/}
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

// highlight class: highlighted

/**
 *             (Number(item.acquired.substring(5, 7)) - Number(thisMonth)) ?
            Number(item.acquired.substring(5, 7)) :
 */