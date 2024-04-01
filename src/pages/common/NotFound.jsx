import React from 'react'
import TopBar from '../../components/users/TopBar'

function NotFound() {
  return (
    <>
     <TopBar />
     <main className='w-full h-[calc(100vh-4.5rem)] flex justify-center gap-3 flex-col items-center'>
        <h1 className='font-bold font-playfair text-[8rem]'>404</h1>
        <h1 className='font-playfair font-bold tamper tracking-wide text-[2rem] mb-56'>PAGE NOT FOUND</h1>
     </main>
    </>
  )
}

export default NotFound