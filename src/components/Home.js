import React from 'react'

import Header from './Header';
import FindSection from './FindSection';
import './Home.css'
const Home = () => {
  return (
    <div className='container-fluid'>
       <Header />
        <FindSection />
       
    </div>
  )
}

export default Home