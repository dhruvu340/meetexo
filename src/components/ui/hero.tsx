'use client'

import React from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'

type Props = {}

const Hero = (props: Props) => {
 
  return (
    <section className='relative min-h-screen bg-black overflow-hidden pt-32 md:pt-40'>
    
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]'>
          
          <div className='space-y-8'>
            
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/30 border border-red-900/50'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75'></span>
                <span className='inline-flex rounded-full h-2 w-2 bg-red-600'></span>
              </span>
              <span className='text-sm text-gray-300'>Schedule meetings like a pro</span>
            </div>

           
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black tracking-tight'>
                <span className='block text-white mb-2'>Meetings</span>
                <span className='block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent'>
                  Made Simple
                </span>
              </h1>
              <p className='text-lg md:text-xl text-gray-400 leading-relaxed max-w-md'>
                Schedule, manage, and optimize your meetings in minutes. No complex tools. No learning curve.
              </p>
            </div>

           
            <div className='grid grid-cols-3 gap-8 pt-8'>
              <div>
                <div className='text-3xl font-bold text-red-500'>50K+</div>
                <p className='text-sm text-gray-500 mt-1'>Active Users</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-red-500'>1M+</div>
                <p className='text-sm text-gray-500 mt-1'>Meetings Scheduled</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-red-500'>99.9%</div>
                <p className='text-sm text-gray-500 mt-1'>Uptime</p>
              </div>
            </div>
          </div>

          
          <div className='flex justify-center lg:justify-end'>
            <div className='w-full max-w-md'>
              <div className='rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-900/30 backdrop-blur-xl p-8 shadow-2xl'>
                <h2 className='text-2xl font-bold text-white mb-8'>Get Started</h2>

                
                <div className='space-y-4'>
                  <button
                   
                    className='w-full px-4 py-4 cursor-pointer rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-red-600/70 active:scale-95'
                  >
                    Sign Up for Free
                  </button>

                  

                  
                </div>
              </div>

              
              <div className='flex items-center justify-center gap-4 text-sm text-gray-400 mt-6'>
                <span className='text-yellow-500'>★★★★★</span>
                <span>4.9/5 • Trusted by 50K+ users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero