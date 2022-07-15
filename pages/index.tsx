import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Landingpage from './LandingPage'
import {useRouter} from 'next/router'


const Home: NextPage = () => {
  return (
    <div >
    <Header/>

    <div>
      <Landingpage/>
    </div>
    </div>
  )
}

export default Home
