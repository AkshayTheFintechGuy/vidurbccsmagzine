import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar theme="light" />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  )
}
