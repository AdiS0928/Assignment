import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Homepage from './Home'
import Premium from './components/Premium'
import Flash from './components/Flash'
import Homebuttom from './components/Homebottom'

const Home: NextPage = () => {
  return (
    <div >
      <Header/>
    <Homepage/>
    <Premium/>
    <Flash />
    <Homebuttom />
    </div>
  )
}

export default Home
