import { useEffect, useRef, useState } from 'react'

const TYPED_STRINGS = [
    'Computer Engineering Student',
    'Full Stack Developer',
    'AI Enthusiast',
    'MERN Stack Developer',
    'Problem Solver',
]

function useTypingEffect(strings, typingSpeed = 80, deletingSpeed = 40, pause = 2000) {
    const [text, setText] = useState('')
    const [strIndex, setStrIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const current = strings[strIndex]
        const tick = () => {
            if (!isDeleting) {
                setText(current.slice(0, text.length + 1))
                if (text.length + 1 === current.length) {
                    timeoutRef.current = setTimeout(() => setIsDeleting(true), pause)
                    return
                }
                timeoutRef.current = setTimeout(tick, typingSpeed)
            } else {
                setText(current.slice(0, text.length - 1))
                if (text.length - 1 === 0) {
                    setIsDeleting(false)
                    setStrIndex(i => (i + 1) % strings.length)
                }
                timeoutRef.current = setTimeout(tick, deletingSpeed)
            }
        }
        timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
        return () => clearTimeout(timeoutRef.current)
    }, [text, isDeleting, strIndex, strings, typingSpeed, deletingSpeed, pause])

    return text
}

export default function Hero({ darkMode }) {
    const typed = useTypingEffect(TYPED_STRINGS)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100)
        return () => clearTimeout(t)
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className={`relative min-h-screen flex items-center pt-16 overflow-hidden ${darkMode ? 'bg-[#0f0f1a]' : 'bg-slate-50'}`}
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

            {/* Glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left — Text */}
                    <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-200'}`}>
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Doing Internship at BMC Software
                        </div>

                        <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            👋 Hello, I'm
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                            <span className="text-gradient">Suraj Khaire</span>
                        </h1>

                        {/* Typing effect */}
                        <div className={`text-xl sm:text-2xl font-mono mb-4 flex items-center gap-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            <span className="text-indigo-400">›</span>&nbsp;
                            <span>{typed}</span>
                            <span className="w-0.5 h-6 bg-indigo-400 ml-0.5 cursor-blink"></span>
                        </div>

                        <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            Building intelligent and scalable applications using AI, cloud, and modern web technologies.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href="/SurajResume.pdf"
                                download
                                className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                            >
                                <i className="fas fa-download text-sm"></i> Download Resume
                            </a>
                            <button
                                onClick={() => scrollTo('contact')}
                                className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${darkMode
                                    ? 'border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400'
                                    : 'border-indigo-300 text-indigo-600 hover:bg-indigo-50'
                                    }`}
                            >
                                <i className="fas fa-envelope text-sm"></i> Contact Me
                            </button>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-4">
                            {[
                                { href: 'https://github.com/Suraj-Khaire-01', icon: 'fab fa-github', label: 'GitHub' },
                                { href: 'https://www.linkedin.com/in/suraj-khaire-995100346/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                                { href: 'mailto:suraj.khaire01@outlook.com', icon: 'fas fa-envelope', label: 'Email' },
                            ].map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 ${darkMode ? 'bg-white/5 hover:bg-indigo-500/20 text-slate-400 hover:text-indigo-400 border border-white/10' : 'bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200'
                                        }`}
                                >
                                    <i className={s.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right — Code card */}
                    <div className={`hidden lg:flex justify-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative animate-float">
                            <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-2xl scale-105"></div>
                            <div className={`relative rounded-2xl border overflow-hidden shadow-2xl ${darkMode ? 'bg-[#1a1a2e] border-white/10' : 'bg-white border-slate-200'}`}>
                                {/* Window chrome */}
                                <div className={`flex items-center gap-2 px-4 py-3 border-b ${darkMode ? 'bg-[#111124] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                    <span className={`ml-2 text-xs font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>portfolio.js</span>
                                </div>
                                <pre className={`p-6 text-sm font-mono leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                    {`const `}<span className="text-sky-400">developer</span>{` = {
  `}<span className="text-violet-400">name</span>{`: `}<span className="text-emerald-400">"Suraj Khaire"</span>{`,
  `}<span className="text-violet-400">college</span>{`: `}<span className="text-emerald-400">"VIIT Pune"</span>{`,
  `}<span className="text-violet-400">skills</span>{`: [
    `}<span className="text-emerald-400">"Full Stack"</span>{`,
    `}<span className="text-emerald-400">"AI / ML"</span>{`,
    `}<span className="text-emerald-400">"Cloud"</span>{`,
  ],
  `}<span className="text-violet-400">cgpa</span>{`: `}<span className="text-orange-400">8.51</span>{`,
  `}<span className="text-violet-400">available</span>{`: `}<span className="text-orange-400">true</span>{`,
};`}
                                </pre>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                onClick={e => { e.preventDefault(); scrollTo('about') }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors animate-bounce"
                aria-label="Scroll down"
            >
                <span className="text-xs font-mono">scroll</span>
                <i className="fas fa-chevron-down text-sm"></i>
            </a>
        </section>
    )
}
