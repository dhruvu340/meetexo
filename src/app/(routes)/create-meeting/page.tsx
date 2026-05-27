"use client"
import React, { useState } from 'react'
import MeetingForm from './_components/meetingform'

type Props = {}
type FormData = {
  eventName: string;
  duration: string;
  location: string;
  locationUrl: string;
  themeColor: string;
};
const Page = (props: Props) => {
  

const [formValue, setFormValue] = useState<FormData>({
  eventName: "",
  duration: "",
  location: "",
  locationUrl: "",
  themeColor: "#FF555D",
});
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-black via-gray-950 to-black'>
      
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      <div className='relative z-10 flex flex-col lg:flex-row gap-0 h-screen'>
        
        
        <div className='w-full lg:w-[50%] p-4 sm:p-6 lg:p-8 order-1 lg:order-1 overflow-y-auto no-scrollbar'>
          <MeetingForm setFormValue={setFormValue} />
        </div>

        
        <div className='w-full lg:w-[50%] p-4 sm:p-6 lg:p-8 order-2 lg:order-2 hidden lg:flex'>
          <div className='rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 p-8 sm:p-10 w-full sticky top-8 h-fit'>
            <div className='text-center text-gray-400 flex items-center justify-center min-h-96'>
              <div>
                <p className='text-lg font-semibold'>Preview Component</p>
                <p className='text-sm text-gray-500 mt-2'>Your preview will appear here</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page