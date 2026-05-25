'use client'

import React, { useState } from 'react'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '@/config/firebaseConfig'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

type Props = {}

const CreateBusiness = (props: Props) => {
  const [businessName, setBusinessName] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useKindeBrowserClient()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!businessName.trim()) {
      toast.error('Please enter a business name', {
        description: 'Business name is required to continue',
      })
      return
    }

    if (!user?.email) {
      toast.error('Please log in to create a business', {
        description: 'You need to be authenticated to create a business',
      })
      return
    }

    setLoading(true)

    try {
      await setDoc(doc(db, 'Business', user.email), {
        businessName: businessName.trim(),
        email: user.email,
        userName: (user.given_name || '') + ' ' + (user.family_name || ''),
        createdAt: new Date().toISOString(),
      })

      toast.success('Business created successfully!', {
        description: 'Redirecting to your dashboard',
      })

      setBusinessName('')
      
      // Redirect after a short delay to show the toast
      setTimeout(() => {
        router.replace('/dashboard')
      }, 1500)
    } catch (err) {
      toast.error('Failed to create business', {
        description: 'Please check your information and try again.',
      })
      console.error('Error creating business:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='relative min-h-screen bg-black overflow-hidden pt-32 md:pt-40'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/30 border border-red-900/50 mb-6'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75'></span>
              <span className='inline-flex rounded-full h-2 w-2 bg-red-600'></span>
            </span>
            <span className='text-sm text-gray-300'>Get started in seconds</span>
          </div>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6'>
            <span className='block text-white mb-2'>What should we</span>
            <span className='block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent'>
              call your business?
            </span>
          </h1>

          <p className='text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto'>
            Choose a name and start scheduling meetings like a pro. You can always change it later.
          </p>
        </div>

        {/* Form Container */}
        <div className='rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-900/30 backdrop-blur-xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-8'>
            <div>
              <label className='block text-gray-300 font-semibold mb-4 text-lg'>Business Name</label>
              <input
                type='text'
                value={businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value)
                }}
                placeholder='e.g., Acme Corporation, Tech Innovations...'
                autoFocus
                className='w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 text-lg focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all'
              />
            </div>

            <button
              type='submit'
              disabled={loading || !businessName.trim()}
              className='w-full cursor-pointer px-6 py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-red-600/70 active:scale-95 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            >
              {loading ? (
                <>
                  <Loader2 className='w-5 h-5 animate-spin' />
                  Creating Business...
                </>
              ) : (
                <>
                  Create Business <CheckCircle className='w-5 h-5' />
                </>
              )}
            </button>
          </form>

          {/* Trust Badge */}
          <div className='flex items-center justify-center gap-4 text-sm text-gray-400 mt-8 pt-8 border-t border-gray-700/30'>
            <span className='text-yellow-500'>★★★★★</span>
            <span>Trusted by 50K+ users worldwide</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}

export default CreateBusiness