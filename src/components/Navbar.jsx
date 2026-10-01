import { useState, useEffect } from 'react'

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('#home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
            // Highlight active nav link
            const sections = NAV_LINKS.map(l => l.href.slice(1))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActive(`#${sections[i]}`)
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (href) => {
        setMenuOpen(false)
        setActive(href)
        const el = document.getElementById(href.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const base = darkMode
        ? `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f1a]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : ''}`
        : `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200' : ''}`

    return (
        <nav className={base}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={e => { e.preventDefault(); handleNavClick('#home') }}
                        className="font-mono text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        <span className="text-slate-400">&lt;</span>SK<span className="text-slate-400">/&gt;</span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <button
                                    onClick={() => handleNavClick(link.href)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === link.href
                                        ? 'text-indigo-400 bg-indigo-500/10'
                                        : darkMode
                                            ? 'text-slate-400 hover:text-indigo-300 hover:bg-white/5'
                                            : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDark}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${darkMode
                                ? 'bg-white/5 hover:bg-white/10 text-yellow-400'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                }`}
                            aria-label="Toggle theme"
                        >
                            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
                        </button>

                        {/* Hamburger (mobile) */}
                        <button
                            onClick={() => setMenuOpen(o => !o)}
                            className={`md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'
                                }`}
                            aria-label="Menu"
                        >
                            <span className={`w-5 h-0.5 transition-all duration-300 ${darkMode ? 'bg-slate-300' : 'bg-slate-700'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-5 h-0.5 transition-all duration-300 ${darkMode ? 'bg-slate-300' : 'bg-slate-700'} ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-5 h-0.5 transition-all duration-300 ${darkMode ? 'bg-slate-300' : 'bg-slate-700'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className={`md:hidden py-4 border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-all ${active === link.href
                                    ? 'text-indigo-400 bg-indigo-500/10'
                                    : darkMode
                                        ? 'text-slate-400 hover:text-indigo-300 hover:bg-white/5'
                                        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
