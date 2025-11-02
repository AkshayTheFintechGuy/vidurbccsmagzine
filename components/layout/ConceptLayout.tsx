import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function ConceptLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fdfdfd' }}>
      <Navbar theme="dark" />
      <header className="container" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1>Software Concepts & Research</h1>
        <p className="muted">Deep dives into design, automation, and systems thinking</p>
      </header>
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}
