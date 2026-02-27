const PROJECTS = [
    {
        icon: 'fas fa-robot',
        iconBg: 'from-indigo-500 to-violet-600',
        title: 'AI-Augmented SaaS Platform for Marketplace Vendors',
        desc: 'Full-stack SaaS platform assisting online sellers with AI-powered sales forecasting, smart pricing, and inventory management. Features a responsive analytics dashboard with Stripe subscription billing.',
        tech: ['React.js', 'Node.js', 'Flask', 'Python', 'Scikit-Learn', 'MongoDB', 'PostgreSQL', 'Stripe API'],
        github: 'https://github.com/Suraj-Khaire-01',
        demo: null,
        status: 'Ongoing',
        statusColor: 'text-blue-400 bg-blue-400/10',
        featured: true,
    },
    {
        icon: 'fas fa-users',
        iconBg: 'from-emerald-500 to-teal-500',
        title: 'AlumNetwork – Alumni Platform',
        desc: 'SaaS landing page and backend system for an alumni network platform with a responsive React UI, authentication APIs, RESTful architecture, and CI/CD deployment on Vercel and Render.',
        tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Vite', 'Git'],
        github: 'https://github.com/Suraj-Khaire-01',
        demo: null,
        status: 'Completed',
        statusColor: 'text-emerald-400 bg-emerald-400/10',
        featured: false,
    },
    {
        icon: 'fas fa-link',
        iconBg: 'from-orange-500 to-amber-500',
        title: 'URL Shortener Web Application',
        desc: 'Web application to generate and manage shortened URLs with RESTful APIs for URL generation and redirection, scalable backend architecture, and structured error handling.',
        tech: ['Node.js', 'Express.js', 'MongoDB'],
        github: 'https://github.com/Suraj-Khaire-01',
        demo: null,
        status: 'Completed',
        statusColor: 'text-emerald-400 bg-emerald-400/10',
        featured: false,
    },
]

export default function Projects({ darkMode }) {
    return (
        <section id="projects" className={`py-24 ${darkMode ? 'bg-[#0f0f1a]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-indigo-400 font-mono text-sm font-medium mb-2">What I've Built</p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        My <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map(p => (
                        <div
                            key={p.title}
                            className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${darkMode
                                    ? `bg-[#1a1a2e] border-white/10 hover:shadow-indigo-500/10 ${p.featured ? 'border-indigo-500/30' : ''}`
                                    : `bg-white border-slate-200 hover:shadow-indigo-200 ${p.featured ? 'border-indigo-300' : ''}`
                                }`}
                        >
                            {p.featured && (
                                <div className="absolute top-4 right-4 px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded-lg z-10">
                                    ⭐ Featured
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/5 group-hover:to-violet-500/5 transition-all duration-300 pointer-events-none rounded-2xl"></div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.iconBg} flex items-center justify-center shadow-lg`}>
                                        <i className={`${p.icon} text-white`}></i>
                                    </div>
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${darkMode ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                            }`}
                                        title="GitHub"
                                    >
                                        <i className="fab fa-github text-sm"></i>
                                    </a>
                                </div>

                                <h3 className={`text-lg font-bold mb-2 leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
                                <p className={`text-sm leading-relaxed mb-4 flex-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{p.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tech.map(t => (
                                        <span key={t} className={`px-2.5 py-1 text-xs font-medium rounded-lg ${darkMode ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className={`flex items-center pt-4 border-t ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${p.statusColor}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                        {p.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Suraj-Khaire-01"
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all hover:-translate-y-0.5 ${darkMode
                                ? 'border-white/10 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-400 hover:bg-indigo-500/5'
                                : 'border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600'
                            }`}
                    >
                        <i className="fab fa-github"></i> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
