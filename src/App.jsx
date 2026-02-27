import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    const [darkMode, setDarkMode] = useState(true)

    // Apply dark mode class to <html>
    useEffect(() => {
        const root = document.documentElement
        if (darkMode) {
            root.classList.add('dark')
            root.classList.remove('light')
            document.body.classList.remove('light')
        } else {
            root.classList.remove('dark')
            root.classList.add('light')
            document.body.classList.add('light')
        }
    }, [darkMode])

    const toggleDark = useCallback(() => setDarkMode(d => !d), [])

    return (
        <div className={darkMode ? 'bg-[#0f0f1a] text-slate-200' : 'bg-slate-50 text-slate-800'}>
            <Navbar darkMode={darkMode} toggleDark={toggleDark} />
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    )
}
