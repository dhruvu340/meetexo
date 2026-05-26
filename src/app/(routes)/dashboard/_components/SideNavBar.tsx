"use client"
import { Button } from '@/components/ui/button'
import { Briefcase, Calendar, Clock, Settings, Plus, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
}

const SideNavBar = ({ isOpen = false, onClose }: Props) => {
    const path = usePathname();
    const [activePath, setActivePath] = useState(path);
    
    const menu = [
        {
            id: 1,
            name: "Meeting Type",
            path: "/dashboard/meeting-type",
            icon: Briefcase,
        },
        {
            id: 2,
            name: "Scheduled Meeting",
            path: "/dashboard/scheduled-meeting",
            icon: Calendar,
        },
        {
            id: 3,
            name: "Availability",
            path: "/dashboard/availability",
            icon: Clock,
        },
        {
            id: 4,
            name: "Settings",
            path: "/dashboard/settings",
            icon: Settings,
        }
    ] 
    
    useEffect(() => {
        path && setActivePath(path);
    }, [path])

    const handleNavClick = () => {
        if (onClose) {
            onClose();
        }
    }

    return (
        <div className='h-full bg-gradient-to-b from-black via-gray-950 to-black border-r border-red-600/20 flex flex-col overflow-hidden'>
            
           
            <div className='md:hidden flex justify-end p-4'>
                <button 
                    onClick={onClose}
                    className='p-2 hover:bg-red-600/20 rounded-lg transition-all duration-300 border border-red-600/20 hover:border-red-600/50 group'
                >
                    <X className='w-6 h-6 text-red-500 group-hover:rotate-90 transition-transform duration-300' />
                </button>
            </div>

            
            <div className='flex justify-center py-6 sm:py-8 px-4'>
                <div className='text-center'>
                    <div className='inline-flex items-center justify-center mb-3'>
                        <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all'>
                            <span className='text-white font-black text-lg sm:text-xl'>M</span>
                        </div>
                    </div>
                    <h1 className='text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
                        Meetexo
                    </h1>
                </div>
            </div>

            
            <div className='px-4 pb-4 sm:pb-6'>
                <Link href="/create-meeting" onClick={handleNavClick}>
                    <Button className='w-full cursor-pointer bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 sm:py-6 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-red-600/70 active:scale-95 flex items-center justify-center gap-2 group'>
                        <Plus className='w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300' /> 
                        <span className='text-sm sm:text-base'>Create Meeting</span>
                    </Button>
                </Link>
            </div>

            
            <nav className='flex-1 overflow-y-auto px-3 sm:px-4 space-y-2 sm:space-y-3'>
                {menu.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activePath === item.path;
                    
                    return (
                        <Link 
                            key={index} 
                            href={item.path}
                            onClick={handleNavClick}
                        >
                            <button 
                                className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold group ${
                                    isActive 
                                        ? 'bg-gradient-to-r from-red-600/30 to-red-600/10 border border-red-600/50 text-red-400 shadow-lg shadow-red-600/20' 
                                        : 'text-gray-400 hover:text-red-400 hover:bg-red-600/10 border border-transparent hover:border-red-600/20'
                                }`}
                            >
                                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all group-hover:scale-110 ${isActive ? 'text-red-400' : 'text-gray-500'}`} />
                                <span className='flex-1 text-left'>{item.name}</span>
                                {isActive && (
                                    <div className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></div>
                                )}
                            </button>
                        </Link>
                    );
                })}
            </nav>
        </div>
    )
}

export default SideNavBar