import React from 'react'
import ProjectComp from './ProjectComp'

const Projects = () => {
  return (
    <div className='text-black px-24'>
      <h1 className='text-5xl tracking-wide uppercase font-bold text-center'>
      initiatives
      </h1>
      <h2 className='text-5xl font-bold text-center'>
      Crafting Timeless Digital Experiences,  One Idea at a Time
      </h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ProjectComp />
        <ProjectComp />
        <ProjectComp />
        <ProjectComp />


       </div>

    </div>
  )
}

export default Projects