export default function Gridlist() {
  const array = [
    {name: '1', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
    {name: '2', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
    {name: '3', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
    {name: '4', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
    {name: '5', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
    {name: '6', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
  ]

  return (
    <div className='grid-list'>
      { array.map(item => (
        <div className='grid-box' key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        )
      ) }
    </div>
  )
}