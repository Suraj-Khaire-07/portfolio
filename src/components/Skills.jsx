import { useEffect, useRef } from 'react'

const SKILL_CARDS = [
    {
        icon: 'fas fa-terminal',
        title: 'Programming Languages',
        color: 'from-blue-500 to-cyan-500',
        tags: [
            { icon: 'fab fa-java', label: 'Java' },
            { icon: 'fab fa-python', label: 'Python' },
            { icon: 'fab fa-js', label: 'JavaScript' },
            { icon: 'fas fa-server', label: 'JCL' },
            { icon: 'fab fa-html5', label: 'HTML/CSS' },
            { icon: 'fas fa-terminal', label: 'Bash' },
        ],
    },
    {
        icon: 'fas fa-palette',
        title: 'Frameworks & Libraries',
        color: 'from-indigo-500 to-violet-500',
        tags: [
            { icon: 'fab fa-angular', label: 'Angular' },
            { icon: 'fab fa-react', label: 'React.js' },
            { icon: 'fas fa-bolt', label: 'FastAPI' },
            { icon: 'fab fa-node-js', label: 'Node.js' },
            { icon: 'fas fa-server', label: 'Express.js' },
            { icon: 'fab fa-python', label: 'Flask' },
            { icon: 'fas fa-wind', label: 'Tailwind CSS' },
        ],
    },
    {
        icon: 'fas fa-database',
        title: 'Databases',
        color: 'from-orange-500 to-amber-500',
        tags: [
            { icon: 'fas fa-leaf', label: 'MongoDB' },
            { icon: 'fas fa-database', label: 'SQL' },
            { icon: 'fas fa-database', label: 'DB2' },
        ],
    },
    {
        icon: 'fas fa-tools',
        title: 'Tools & Platforms',
        color: 'from-slate-500 to-slate-600',
        tags: [
            { icon: 'fab fa-git-alt', label: 'Git' },
            { icon: 'fab fa-github', label: 'GitHub' },
            { icon: 'fas fa-plug', label: 'REST APIs' },
            { icon: 'fab fa-microsoft', label: 'Azure' },
            { icon: 'fab fa-aws', label: 'AWS' },
            { icon: 'fas fa-fire', label: 'Firebase' },
            { icon: 'fas fa-infinity', label: 'GitHub Actions' },
            { icon: 'fas fa-network-wired', label: 'Topaz API' },
            { icon: 'fas fa-diagram-project', label: 'MCP' },
            { icon: 'fas fa-desktop', label: 'ISPF' },
        ],
    },
]

const PROGRESS_ITEMS = [
    { label: 'JavaScript / React.js', pct: 90, color: 'bg-yellow-400' },
    { label: 'Angular / FastAPI', pct: 80, color: 'bg-red-400' },
    { label: 'Node.js / Express.js', pct: 82, color: 'bg-emerald-400' },
    { label: 'Python / Flask', pct: 80, color: 'bg-blue-400' },
    { label: 'Java', pct: 75, color: 'bg-orange-400' },
    { label: 'Cloud (Azure / AWS / Firebase)', pct: 68, color: 'bg-violet-400' },
]

export default function Skills({ darkMode }) {
    const progressRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('[data-width]').forEach(el => {
                        el.style.width = el.getAttribute('data-width')
                    })
                }
            },
            { threshold: 0.3 }
        )
        if (progressRef.current) observer.observe(progressRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className={`py-24 ${darkMode ? 'bg-[#111124]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-indigo-400 font-mono text-sm font-medium mb-2">What I Know</p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {SKILL_CARDS.map(card => (
                        <div
                            key={card.title}
                            className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode
                                ? 'bg-[#1a1a2e] border-white/10 hover:border-indigo-500/30 hover:shadow-indigo-500/10'
                                : 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:shadow-indigo-100'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}>
                                <i className={`${card.icon} text-white`}></i>
                            </div>
                            <h3 className={`font-bold text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{card.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {card.tags.map(t => (
                                    <span
                                        key={t.label}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode
                                            ? 'bg-white/5 text-slate-300 border border-white/10'
                                            : 'bg-white text-slate-600 border border-slate-200'
                                            }`}
                                    >
                                        <i className={`${t.icon} text-indigo-400 text-xs`}></i>
                                        {t.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`p-6 rounded-2xl border mb-8 ${darkMode ? 'bg-[#1a1a2e] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    <h3 className={`text-sm font-bold mb-4 uppercase tracking-widest ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Concepts</h3>
                    <div className="flex flex-wrap gap-3">
                        {['RESTful APIs', 'CI/CD', 'Authentication', 'Cloud Deployment', 'Compiler Design', 'Mainframe Technology'].map(c => (
                            <span key={c} className={`px-4 py-2 rounded-xl text-sm font-medium ${darkMode ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}`}>{c}</span>
                        ))}
                    </div>
                </div>

                <div
                    ref={progressRef}
                    className={`p-8 rounded-2xl border ${darkMode ? 'bg-[#1a1a2e] border-white/10' : 'bg-slate-50 border-slate-200'}`}
                >
                    <h3 className={`text-xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>Proficiency Levels</h3>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                        {PROGRESS_ITEMS.map(item => (
                            <div key={item.label}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item.label}</span>
                                    <span className="text-sm font-bold text-indigo-400">{item.pct}%</span>
                                </div>
                                <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-slate-200'}`}>
                                    <div className={`h-full rounded-full progress-fill ${item.color} w-0`} data-width={`${item.pct}%`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}