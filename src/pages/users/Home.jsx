import React from 'react'
import myImage from '../../assets/Foods/cheff-men.png'

function Home() {
  return (
   <main className='text-white w-full h-screen'> 
     <div className='flex w-full h-[calc(100vh-4.5rem)]'>
       <div className='flex items-center justify-center w-[50%] h-full border-r border-gray-100  border-opacity-10'>
          <img src={myImage} className='h-10 w-10' alt="mainfood image" />
       </div>
       <div className='w-[50%] h-full'></div>
     </div>
   </main>
  )
}

export default Home