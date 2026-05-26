import React from 'react'
import Meetingform from './_components/meetingform'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='grid grid-col-1 mg:grid-col-3'>
      <div className='shadow-2xl border h-screen'><Meetingform/></div>
      <div className='md:col-span-2'></div>
    </div>
  )
}

export default Page