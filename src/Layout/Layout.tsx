import NavBar from '@/component/NavBar'
import React, { ReactNode } from 'react'
 
 
 interface LayoutProps{
    children: ReactNode
 }
export default function Layout({children}: LayoutProps) {
  return (
    <div> 
       <NavBar size={100} /> 
      { children }
    </div>
  )
}