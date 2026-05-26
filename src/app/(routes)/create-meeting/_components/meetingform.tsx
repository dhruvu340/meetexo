import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
type Props = {}

const Meetingform = (props: Props) => {
  return (
    <div className='p-4 '>
        <h2 className='flex gap-2'> <ChevronLeft/>Cancel</h2>
        <div className='mt-4'>
            <h2 className='font-bold text-2xl my-4'>
            Create New Event
            </h2>
           <hr /> 
        </div>
        <div className='flex flex-col my-3'>
            <h2 className='font-bold'>Event Name</h2>
            <Input placeholder='Name of Your Meeting Event'/>
            <h2>Duration</h2>
            
            <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant={'outline'} className='bg-red-700 text-white cursor-pointer max-w-40' >
                30 Mins
            </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    
      
      <DropdownMenuItem>15 Min</DropdownMenuItem>
      <DropdownMenuItem>30 Min</DropdownMenuItem>
      <DropdownMenuItem>45 Min</DropdownMenuItem>
      <DropdownMenuItem>60 Min</DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>
        </div>
        
    </div>
  )
}

export default Meetingform