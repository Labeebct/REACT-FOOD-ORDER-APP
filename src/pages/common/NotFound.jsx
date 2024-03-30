import React from 'react'
import TopBar from '../../components/users/TopBar'

function NotFound() {
  return (
    <>
     <TopBar />
     <main className='w-full h-[calc(100vh-4.5rem)] flex justify-center gap-3 flex-col items-center'>
        <h1 className='font-bold text-[8rem]'>404</h1>
        <h1 className='font-playfair font-bold tamper tracking-wide text-[2rem]'>PAGE NOT FOUND</h1>
        <h4 className='mb-44 text-[2rem]'>😕</h4>
     </main>
    </>
  )
}

export default NotFound