import React from 'react'
import './FindSection.css'
const FindSection = () => {
  return (
    <div className='row eating-section'>
     <div className='col-lg-6 eating'>
       <h1 className='heading'>Eating at Nando's</h1>
       <p className='section-para'>We’ve got a whole lot more up our sleeves than our legendary flame-grilled PERi-PERi chicken!</p>
       <button className='btn home-btn'>Check Out over Menu</button>
     </div>
     <div className='col-lg-6 find'>
        <h1 className='heading'>Find a Nando's</h1>
        <p className='section-para'>Want to get a Nando’s fix sharpish? Finding your nearest Nando’s is just a click away!</p>
      
       <div className='col-12 form-div'>
        <h4>Search for a Nando's nearest to you.</h4>
        <input type="text" className='finding-section-form'/><br/>
        <span className='finding-link'><a href='#' className='text-white' >View All Restaurants</a></span>
       </div>

     </div>

  </div>
  )
}

export default FindSection