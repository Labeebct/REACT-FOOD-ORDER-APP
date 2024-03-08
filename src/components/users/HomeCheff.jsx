import React from 'react'
import CheffCard from '../../components/users/CheffCard'

function HomeCheff() {
  return (
    <div className='w-full h-auto'>
      <div className="w-full flex items-center justify-center">
        <h3 className='text-[2rem] font-poppins font-[500] text-gray-200'>OUR MAIN CHEFF</h3>
      </div>
         <CheffCard />
    </div>
  )
}

export default HomeCheff