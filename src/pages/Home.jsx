import React from 'react'
import hhh from '../assets/hhh.png'
import hhhl from '../assets/hhhl.png'
import hhhm from '../assets/hhhm.png'

function Home() {
  return (
    <>
     <section className='hero'>
      <div className='pt-10'>
        <div className='px-4 mb-7.5'>
          <h3 className='text-lg font-medium leading-120 tracking-3 text-dark-40 mb-3.5'>Your Journey to Tomorrow Begins Here</h3>
          <h1 className='text-3xl font-medium leading-120 tracking-3 mb-2.5 text-white'>Explore the Frontiers of Artificial Intelligence</h1>
          <p className='text-sm leading-150 tracking-3 text-gray-50'>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. <span className='hidden xll:block'> Join us on this visionary expedition into the heart of AI.</span></p>
        </div>
        <div className='border-y border-dark-15 flex'>
          <div className='p-5'>
            <span className="block text-2xl font-semibold leading-150 tracking-3 text-white">300<span className='text-yellow-55'>+</span></span>
            <h5 className='text-sm leading-150 tracking-3 text-gray-60'>Resources available</h5>
          </div>
          <div className='p-5 border-x border-dark-15'>
            <span className="block text-2xl font-semibold leading-150 tracking-3 text-white">12k<span className='text-yellow-55'>+</span></span>
            <h5 className='text-sm leading-150 tracking-3 text-gray-60'>Resources available</h5>
          </div>
          <div className='p-5'>
            <span className="block text-2xl font-semibold leading-150 tracking-3 text-white">10k<span className='text-yellow-55'>+</span></span>
            <h5 className='text-sm leading-150 tracking-3 text-gray-60'>Resources available</h5>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Home