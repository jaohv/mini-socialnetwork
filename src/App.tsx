import { Header } from './components/Header';
import {Post, PostProps} from './components/Post';
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

interface Posts extends PostProps {
  id: number
}

const posts:Posts[] = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/jaohv.png',
          name: 'João Vitor',
          role: 'Developer @Testing Company'
      },
      content: [
      { type: 'paragraph', content: 'Eai pessoal, tudo certo? 👋'},
      { type: 'paragraph', content: 'Meu primeiro post dentro da plataforma que eu mesmo estou desenvolvendo, aprender React nunca foi tão bom! Aproveitando dê uma olhada no meu GitHub'},
      { type: 'link', content: 'github.com/jaohv'},
      ],
      publishedAt: new Date('2022-09-13 17:45:00'),
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/MauricioKrziminski.png',
          name: 'Mauricio Krziminski',
          role: 'Dev @ PUC-RS'
      },
      content: [
      { type: 'paragraph', content: 'Eai pessoal, tudo bem?'},
      { type: 'paragraph', content: 'Realizando meu primeiro post dentro da plataforma, confira meu perfil lá no LinkedIN'},
      { type: 'link', content: 'https://www.linkedin.com/in/mauricio-krziminski/'},
      ],
      publishedAt: new Date('2022-09-12 20:00:00'),
  },
  {
      id: 3,
      author: {
          avatarUrl: 'https://github.com/DevErickOliveira.png',
          name: 'Erick Oliveira',
          role: 'Dev Backend @ SAP'
      },
      content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. Tem varios projetos que fiz durante minha caminhada de estudos.'},
      { type: 'link', content: 'https://github.com/DevErickOliveira'},
      ],
      publishedAt: new Date('2022-05-12 21:00:00'),
  }
];

export function App() {  
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
