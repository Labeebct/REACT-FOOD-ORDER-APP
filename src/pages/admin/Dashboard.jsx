import React from 'react'

function Dashboard() {
  return (
    <div className="h-full w-full p-4 flex flex-col items-center overflow-y-scroll">
      <div className="w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-4 mb-4 sticky top-0 left-0 right-0">
        <h3 className="font-roboto text-[1.2rem] font-medium">Dashboard</h3>
      </div>
      <section className='flex justify-center items-center border border-slate-100 border-opacity-20 h-[80%] w-[60%]'>
        ORDER GRAPH
      </section>
    </div>
  )
}

export default Dashboard