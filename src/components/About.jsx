import { useEffect, useRef } from 'react'

const highlights = [
    { icon: 'fas fa-layer-group', title: 'Full Stack Developer', sub: 'React, Node.js, Express, Flask' },
    { icon: 'fas fa-brain', title: 'AI / ML Enthusiast', sub: 'Scikit-Learn, Explainable AI, Data Science' },
    { icon: 'fas fa-cloud', title: 'Cloud & DevOps', sub: 'Azure, Firebase, GitHub Actions, CI/CD' },
]

export default function About({ darkMode }) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('in-view') },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" className={`py-24 ${darkMode ? 'bg-[#0f0f1a]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-indigo-400 font-mono text-sm font-medium mb-2">Get To Know Me</p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                <div
                    ref={ref}
                    className="grid lg:grid-cols-2 gap-16 items-center opacity-0 translate-y-8 transition-all duration-700 [&.in-view]:opacity-100 [&.in-view]:translate-y-0"
                >
                    {/* Avatar side */}
                    <div className="flex justify-center">
                        <div className="relative">

                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 blur-2xl opacity-20 scale-110 animate-pulse-slow"></div>

                            <div className={`relative w-72 h-72 rounded-3xl overflow-hidden flex items-center justify-center border 
                            ${darkMode
                                    ? 'bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] border-white/10'
                                    : 'bg-gradient-to-br from-indigo-50 to-violet-50 border-slate-200'}`}>

                                {/* Your Image */}
                                <img
                                    src="/profile1.jpeg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-1.5 bg-indigo-600 text-white">
                                <i className="fas fa-code text-xs"></i> Full Stack
                            </div>

                            <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-1.5 bg-violet-600 text-white">
                                <i className="fas fa-brain text-xs"></i> AI/ML
                            </div>

                            <div className="absolute top-1/2 -right-8 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-1.5 bg-emerald-600 text-white">
                                <i className="fas fa-cloud text-xs"></i> Cloud
                            </div>

                        </div>
                    </div>

                    {/* Text side */}
                    <div>
                        <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            Building <span className="text-gradient">Intelligent Systems</span>
                        </h3>
                        <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            I am a Computer Engineering student at{' '}
                            <strong className={darkMode ? 'text-white' : 'text-slate-800'}>Vishwakarma Institute of Information Technology, Pune</strong>{' '}
                            with a strong interest in Full Stack Development and Artificial Intelligence. I enjoy solving problems by
                            understanding systems at a fundamental level and building practical, real-world solutions.
                        </p>
                        <p className={`mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            I have experience developing scalable web applications, AI-powered platforms, and RESTful APIs using
                            technologies like <strong className={darkMode ? 'text-white' : 'text-slate-800'}>React, Node.js, Python, and MongoDB</strong>.
                            My work focuses on combining intelligent systems with modern software engineering practices.
                        </p>
                        <p className={`mb-8 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            I am continuously exploring emerging technologies such as{' '}
                            <strong className={darkMode ? 'text-white' : 'text-slate-800'}>Machine Learning, Data-Centric AI, and cloud architectures</strong>{' '}
                            to enhance my technical skills and create impactful projects.
                        </p>

                        {/* Highlights */}
                        <div className="grid gap-3 mb-8">
                            {highlights.map(h => (
                                <div
                                    key={h.title}
                                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-indigo-500/40 ${darkMode ? 'bg-white/3 border-white/8' : 'bg-white border-slate-200 hover:bg-indigo-50/50'
                                        }`}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                                        <i className={`${h.icon} text-indigo-400`}></i>
                                    </div>
                                    <div>
                                        <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-800'}`}>{h.title}</p>
                                        <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{h.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25"
                        >
                            Let's Connect <i className="fas fa-arrow-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
