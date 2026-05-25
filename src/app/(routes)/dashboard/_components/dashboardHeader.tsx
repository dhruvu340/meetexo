"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { LogOut, User, Settings, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DashboardHeader = () => {
    const { user } = useKindeBrowserClient();
    const chevronRef = useRef<SVGSVGElement>(null);

    const handleOpenChange = (open: boolean) => {
        if (chevronRef.current) {
            gsap.to(chevronRef.current, {
                rotation: open ? 180 : 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    return (
        <DropdownMenu onOpenChange={handleOpenChange}>
            <DropdownMenuTrigger asChild>
                <button className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-600/20 transition-all duration-300 border border-red-600/20 hover:border-red-600/50 group cursor-pointer'>
                    {user?.picture && (
                        <Image 
                            src={user.picture} 
                            alt={user.given_name || 'User'} 
                            width={36} 
                            height={36}
                            className='rounded-full w-9 h-9 border-2 border-red-600/30 group-hover:border-red-500 transition-all duration-300 shadow-lg shadow-red-600/20'
                        />
                    )}
                    <ChevronDown 
                        ref={chevronRef}
                        className='w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors' 
                    />
                </button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align='end' className='w-56 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-600/20 backdrop-blur-xl shadow-2xl shadow-red-600/20'>
                <DropdownMenuGroup>
                    <DropdownMenuLabel className='text-red-500 font-semibold px-2 py-3 text-xs border-b border-red-600/20'>
                        {user?.email || 'My Account'}
                    </DropdownMenuLabel>
                    
                    <DropdownMenuItem className='cursor-pointer hover:bg-red-600/20 focus:bg-red-600/20 text-gray-300 hover:text-red-400 transition-all py-3 px-4 rounded-md mx-2 my-1 text-sm group'>
                        <User className='w-4 h-4 mr-3 text-red-500 group-hover:scale-110 transition-transform' />
                        <span>Profile</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className='cursor-pointer hover:bg-red-600/20 focus:bg-red-600/20 text-gray-300 hover:text-red-400 transition-all py-3 px-4 rounded-md mx-2 my-1 text-sm group'>
                        <Settings className='w-4 h-4 mr-3 text-red-500 group-hover:rotate-180 transition-transform duration-300' />
                        <span>Settings</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className='bg-red-600/20 my-2' />
                    
                    <LogoutLink>
                        <DropdownMenuItem className='cursor-pointer hover:bg-red-600/20 focus:bg-red-600/20 text-red-400 hover:text-red-300 transition-all py-3 px-4 rounded-md mx-2 my-1 text-sm group'>
                            <LogOut className='w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform' />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </LogoutLink>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DashboardHeader