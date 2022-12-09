import React from 'react'

import Header from './Header';
import FindSection from './FindSection';
import SocialSection from './SocialSection';
import './Home.css'
const Home = () => {
  return (
    <div className='container-fluid'>
       <Header />
        <FindSection />
        <SocialSection />
    </div>
  )
}

export default Home