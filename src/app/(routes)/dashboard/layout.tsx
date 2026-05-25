"use client"
import React, { useState, useRef, useEffect } from 'react'
import SideNavBar from './_components/SideNavBar';
import DashboardHeader from './_components/dashboardHeader';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const backdropRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isMobileSidebarOpen) {
           
            gsap.to(backdropRef.current, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.3,
                ease: "power2.out"
            });

            
            gsap.to(sidebarRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power3.out"
            });

            
            gsap.to(hamburgerButtonRef.current, {
                rotation: 90,
                duration: 0.3,
                ease: "back.out"
            });
        } else {
            
            gsap.to(backdropRef.current, {
                opacity: 0,
                pointerEvents: "none",
                duration: 0.3,
                ease: "power2.in"
            });

            
            gsap.to(sidebarRef.current, {
                x: -256,
                duration: 0.4,
                ease: "power3.in"
            });

            
            gsap.to(hamburgerButtonRef.current, {
                rotation: 0,
                duration: 0.3,
                ease: "back.out"
            });
        }
    }, [isMobileSidebarOpen]);

    const toggleSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    const closeSidebar = () => {
        setIsMobileSidebarOpen(false);
    };

    return (
        <div className='flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden'>
            
           
            <div className='hidden md:flex md:w-64 md:fixed md:h-full md:flex-col md:z-20 md:border-r md:border-red-600/20'>
                <SideNavBar />
            </div>

            
            <div 
                ref={backdropRef}
                className='fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden opacity-0 pointer-events-none'
                onClick={closeSidebar}
            />

            
            <div 
                ref={sidebarRef}
                className='fixed left-0 top-0 h-full w-64 bg-black z-40 md:hidden'
                style={{ transform: 'translateX(-256px)' }}
            >
                <SideNavBar 
                    isOpen={isMobileSidebarOpen}
                    onClose={closeSidebar}
                />
            </div>

           
            <div className='flex-1 flex flex-col overflow-hidden md:ml-64'>
                
                
                <div className='bg-gradient-to-r from-black via-gray-900 to-black border-b border-red-600/20 sticky top-0 z-40'>
                    <div className='max-w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
                        
                        
                        <button 
                            ref={hamburgerButtonRef}
                            onClick={toggleSidebar}
                            className='md:hidden p-2 hover:bg-red-600/20 rounded-lg transition-all duration-300 border border-red-600/20 hover:border-red-600/50 flex-shrink-0 group'
                        >
                            {isMobileSidebarOpen ? (
                                <X className='w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors' />
                            ) : (
                                <Menu className='w-6 h-6 text-red-500 group-hover:text-red-400 transition-colors' />
                            )}
                        </button>

                        
                        <div className='hidden sm:block flex-1 ml-4'>
                            <h2 className='text-lg sm:text-xl font-semibold bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
                                Welcome Back
                            </h2>
                        </div>

                        
                        <div className='ml-auto'>
                            <DashboardHeader />
                        </div>
                    </div>
                </div>

              
                <main className='flex-1 overflow-y-auto bg-gradient-to-br from-black via-gray-950 to-black'>
                    <div className='w-full'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout