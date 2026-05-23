'use client'

import React, { useState } from 'react'
import { FaGoogle, FaGithub, FaRegEnvelope } from 'react-icons/fa'

type Props = {}

const Hero = (props: Props) => {
  const [email, setEmail] = useState('')
  const [isEmailFocused, setIsEmailFocused] = useState(false)

  const handleGoogleLogin = () => {
    console.log('Google login clicked')
    // Add your Google OAuth logic here
  }

  const handleGithubLogin = () => {
    console.log('GitHub login clicked')
    // Add your GitHub OAuth logic here
  }

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email signup with:', email)
    // Add your email signup logic here
    setEmail('')
  }

  return (
    <section className='relative min-h-screen bg-black overflow-hidden pt-20'>
      {/* Background Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]'>
          {/* Left Content */}
          <div className='space-y-8'>
            {/* Status Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/30 border border-red-900/50'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75'></span>
                <span className='inline-flex rounded-full h-2 w-2 bg-red-600'></span>
              </span>
              <span className='text-sm text-gray-300'>Schedule meetings like a pro</span>
            </div>

            {/* Heading */}
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

            {/* Stats */}
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

          {/* Right Side - Auth Card */}
          <div className='flex justify-center lg:justify-end'>
            <div className='w-full max-w-md'>
              <div className='rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-900/30 backdrop-blur-xl p-8 shadow-2xl'>
                <h2 className='text-2xl font-bold text-white mb-8'>Get Started</h2>

                {/* Social Buttons */}
                <div className='space-y-3 mb-6'>
                  {/* Google Button */}
                  <button
                    onClick={handleGoogleLogin}
                    className='w-full  cursor-pointer flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-gray-700/50 hover:border-red-600/50 text-white font-medium transition-all duration-300 hover:bg-red-950/20'
                  >
                    <FaGoogle className='w-5 h-5' />
                    Continue with Google
                  </button>

                  {/* GitHub Button */}
                  <button
                    onClick={handleGithubLogin}
                    className='w-full flex items-center cursor-pointer justify-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-gray-700/50 hover:border-red-600/50 text-white font-medium transition-all duration-300 hover:bg-red-950/20'
                  >
                    <FaGithub className='w-5 h-5' />
                    Continue with GitHub
                  </button>
                </div>

                {/* Divider */}
                <div className='relative py-4'>
                  <div className='absolute inset-x-0 top-1/2 h-px bg-gray-700'></div>
                  <p className='relative bg-black text-center text-sm text-gray-500 px-2'>Or continue with email</p>
                </div>

                {/* Email Form */}
                <form onSubmit={handleEmailSignup} className='space-y-4 mt-6'>
                  <div className='relative'>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(false)}
                      placeholder='your@email.com'
                      required
                      className='w-full px-4 py-3 pl-12 rounded-lg bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-red-600/50 focus:bg-red-950/20'
                    />
                    <FaRegEnvelope className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${isEmailFocused ? 'text-red-500' : 'text-gray-600'}`} />
                  </div>

                  <button
                    type='submit'
                    className='w-full px-4 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-red-600/70 active:scale-95'
                  >
                    Sign Up for Free
                  </button>
                </form>

               
              </div>

              {/* Trust Badges */}
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