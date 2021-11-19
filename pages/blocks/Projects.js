import Image from 'next/image'

export default function Projects() {
  const array = [
    {name: 'Projekt 1', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
    {name: 'Projekt 2', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
    {name: 'Projekt 3', description: 'Duis occaecat id magna pariatur ea tempor consectetur eu laborum. Dolor esse nostrud veniam reprehenderit sunt adipisicing ea elit culpa voluptate culpa ullamco. Enim sint anim duis labore sit proident consectetur commodo. Pariatur officia magna ea velit labore nostrud cillum pariatur deserunt eu duis. Aliqua dolor consequat commodo laborum. Commodo nulla ipsum duis ad dolor irure esse nulla consectetur deserunt. Commodo ea cillum minim cillum dolore sunt.'},
  ]

  return (
    <div className='project-container'>
      { array.map(item => (
      <div key={item.name} className='project-item'>
        <div className='image-container'>
          <a href="#">
          <Image src='https://wallup.net/wp-content/uploads/2018/09/26/235641-broadcast-test-pattern.jpg'
          height='200' width='350' />
          </a>
        </div>
        <div className='text-container'>
        <a href="#"><h2>{item.name}</h2></a>
          <p>{item.description}</p>
        </div>
      </div>
      )
      ) }
        
    </div>
  )
}