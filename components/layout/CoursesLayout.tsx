import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#f9fbff' }}>
      <Navbar theme="light" />
      <header className="container" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1>Learn with Akshay</h1>
        <p className="muted">Courses, live sessions, and practical workshops</p>
      </header>
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}
