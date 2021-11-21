import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import { fetchMyThings } from './api/strapi'

import styles from '../styles/Home.module.css'

import Header from './blocks/header'
import Footer from './blocks/footer'

import Landing from './blocks/Landing'
import Experience from './blocks/Experience'
import Me from './blocks/Me'
import Contact from './blocks/Contact'

export default function Home({body}) {
  return (
    <div className='container'>

      <main className={styles.main}>
        
        <Header 
          title='Frontpage' 
          showBlogLink={ body.showBlogs } />

        <Landing 
          header={ body.landingName }
          subHeader={ body.landingSubTitle} />

        <Experience 
          description={ body.experienceDesc } />

        <Me 
          description={ body.meDesc } />

        <Contact 
          message={ body.thankYouMessage } />

      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query{
        frontpage{
          landingName,
          landingSubTitle,
          experienceDesc,
          meDesc,
          thankYouMessage,
          showBlogs
        }
      }
    `
  })

  return {
    props: {
      body: data.frontpage
    }
  }
}