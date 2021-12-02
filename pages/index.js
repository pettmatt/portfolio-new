import Header from './blocks/header'
import Footer from './blocks/footer'

import Landing from './blocks/Landing'
import Experience from './blocks/Experience'
import Me from './blocks/Me'
import Contact from './blocks/Contact'

console.log('Work in progress')

export default function Home({ body }) {

  return (
    <div className='main-container'>
      <main>
        
        <Header 
          title='Portfolio'
          showBlogLink={ body.showBlogs } />

        <Landing/>

        <Experience 
          description={ body.experienceDesc }
          projects={ body.projects }
          toolkit={ body.skills } 
          toolkitDesc={ body.toolkitDesc }/>

        <Me 
          description={ body.meDesc} />

        <Contact 
          email={ body.email }
          message={ body.contactMessage }
          location={ body.location } />

      </main>
      <Footer 
        socials={body.socials} />
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from backend
  const res = await fetch(process.env.NEXT_PUBLIC_URL)
  const data = await res.json()

  // Forward to frontend use
  return {props: {body: data}}
}

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: 'http://localhost:1337/graphql',
//     cache: new InMemoryCache()
//   })

//   const { data } = await client.query({
//     query: gql`
//       query{
//         frontpage{
//           landingName,
//           landingSubTitle,
//           experienceDesc,
//           meDesc,
//           thankYouMessage,
//           showBlogs,
//           email,
//           projects{
//             id,
//             title,
//             link,
//             thumbnail{id,url}
//           },
//           skills{
//             id,
//             name,
//             confident,
//             show,
//             background{id,url}
//           }
//           socials{
//             id,
//             name,
//             link
//           }
//         }
//       }
//     `
//   })

//   return {
//     props: {
//       body: data.frontpage,
//     }
//   }
// }

// export async function getStaticProps() {
//   const url = `${
//     process.env.NEXT_PUBLIC_URL || 'http://localhost:1337/'
//   }frontpage`

//   const response = await fetch(url)
//   return { 
//     props: {
//       data: await response.json()
//     }
//   }
// }
