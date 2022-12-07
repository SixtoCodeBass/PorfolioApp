import React from 'react'
import Work from './card/Work'
import Education from './card/Education'
import Technology from './card/Technology'


const Main = () => {
  return (
    <main class="container">
    <div class="row mt-3">
      <Work />
      <Education />
    </div>
    <div class="row mt-3">
      <Technology />
    </div>
  </main>
  )
}

export default Main