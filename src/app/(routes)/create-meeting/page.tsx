"use client"
import React, { useState } from 'react'
import MeetingForm from './_components/meetingform'
import Preview from './_components/preview';

type Props = {}
export type FormData = {
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
      
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content container */}
      <div className='relative z-10 flex flex-col lg:flex-row gap-0 min-h-screen'>
        
        {/* Meeting Form - Left on large screens, Top on small screens */}
        <div className='w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 overflow-y-auto no-scrollbar'>
          <MeetingForm setFormValue={setFormValue} />
        </div>

        {/* Preview - Right on large screens, Bottom on small screens */}
        <div className='w-full lg:w-1/2 p-4 text-white sm:p-6 lg:p-8 overflow-y-auto no-scrollbar'>
          <Preview formValue={formValue} />
        </div>
        
      </div>
    </div>
  )
}

export default Page