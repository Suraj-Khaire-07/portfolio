const EXPERIENCE = [
    {
        role: 'Product Developer Intern',
        company: 'BMC Software',
        location: 'Hybrid • Pune, India',
        date: 'Jan 2026 – June 2026',
        project: 'AI-powered JCL Modernization Platform',
        points: [
            // 'Developed 15+ frontend and backend features using Angular and FastAPI for an AI-powered JCL modernization platform.',
            // 'Integrated Large Language Models (LLMs) with manual user prompting, leveraging the compiler frontend to process ASTs for JCL explanation, syntax correction, and modernization.',
            // 'Designed and implemented a multi-tab JCL editor with persistent session storage, allowing users to seamlessly resume work across sessions.',
            // 'Integrated the Topaz API to securely communicate with IBM Mainframe systems for automated JCL retrieval and processing.',
        ],
        tech: ['Angular', 'FastAPI', 'Python', 'JCL', 'AST', 'Compiler Frontend', 'LLM', 'Topaz API'],
    },
]

export default function Experience({ darkMode }) {
    return (
        <section id="experience" className={`py-24 ${darkMode ? 'bg-[#0f0f1a]' : 'bg-slate-50'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-indigo-400 font-mono text-sm font-medium mb-2">Where I've Worked</p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {EXPERIENCE.map((exp, i) => (
                        <div
                            key={i}
                            className={`p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-[#1a1a2e] border-white/10 hover:border-indigo-500/30' : 'bg-white border-slate-200 hover:border-indigo-300'}`}
                        >
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                                <div>
                                    <h3 className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                                    <p className="text-indigo-400 text-sm font-semibold mt-0.5">{exp.company} <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>· {exp.location}</span></p>
                                </div>
                                <span className={`text-xs font-mono px-2.5 py-1 rounded-lg whitespace-nowrap ${darkMode ? 'text-indigo-400 bg-indigo-500/10' : 'text-indigo-600 bg-indigo-50'}`}>{exp.date}</span>
                            </div>
                            <p className={`text-sm font-medium italic mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{exp.project}</p>

                            <ul className="space-y-2 mb-5">
                                {exp.points.map((pt, j) => (
                                    <li key={j} className={`flex gap-2.5 text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        <i className="fas fa-caret-right text-indigo-400 mt-1 text-xs flex-shrink-0"></i>
                                        {pt}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map(t => (
                                    <span key={t} className={`px-2.5 py-1 text-xs font-medium rounded-lg ${darkMode ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}`}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}