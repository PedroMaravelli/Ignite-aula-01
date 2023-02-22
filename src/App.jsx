import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-02-20 10:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-02-10 20:00:00'),
    },
  ];




  return (
    <div>
      <Header></Header>

      <div className={styles.whapper}>
        <Sidebar></Sidebar>
        <main>
            {posts.map((post =>{
              return(
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}

                />
              )

            }))}

        </main>
      </div>
    </div>
  )
}

export default App
