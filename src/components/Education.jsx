const TIMELINE = [
    {
        icon: 'fas fa-graduation-cap',
        iconBg: 'from-indigo-500 to-violet-500',
        date: '2023 – 2027',
        title: 'B.Tech in Computer Engineering',
        sub: 'Vishwakarma Institute of Information Technology, Pune',
        desc: 'Currently in Second Year. Relevant coursework: Data Structures & Algorithms, OOPs, Computer Networks, OS, Data Science, Machine Learning, Explainable AI, Data-Centric AI.',
        tags: ['CGPA: 8.51', 'Final Year'],
    },
]

const COURSEWORK = [
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Data Science',
    'Machine Learning',
    'Explainable AI',
    'Data-Centric AI',
]

export default function Education({ darkMode }) {
    return (
        <section id="education" className={`py-24 ${darkMode ? 'bg-[#111124]' : 'bg-white'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-indigo-400 font-mono text-sm font-medium mb-2">My Journey</p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Education & <span className="text-gradient">Coursework</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                {/* Timeline */}
                <div className="relative mb-12">
                    <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gradient-to-b from-indigo-500 to-transparent' : 'bg-gradient-to-b from-indigo-300 to-transparent'}`}></div>
                    <div className="space-y-8">
                        {TIMELINE.map((item, i) => (
                            <div key={i} className="relative flex gap-6">
                                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center shadow-lg`}>
                                    <i className={`${item.icon} text-white text-sm`}></i>
                                </div>
                                <div className={`flex-1 p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-[#1a1a2e] border-white/10 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-300'}`}>
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                        <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                                        <span className={`text-xs font-mono px-2.5 py-1 rounded-lg ${darkMode ? 'text-indigo-400 bg-indigo-500/10' : 'text-indigo-600 bg-indigo-50'}`}>{item.date}</span>
                                    </div>
                                    <p className="text-indigo-400 text-sm font-medium mb-2">{item.sub}</p>
                                    <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                                    <div className="flex gap-2">
                                        {item.tags.map(t => (
                                            <span key={t} className={`px-2.5 py-1 text-xs font-medium rounded-lg ${darkMode ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-white text-slate-600 border border-slate-200'}`}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coursework */}
                <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-[#1a1a2e] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                    <h3 className={`text-lg font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        <i className="fas fa-book-open text-indigo-400 mr-2"></i>Relevant Coursework
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {COURSEWORK.map(c => (
                            <div key={c} className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium ${darkMode ? 'bg-white/3 border-white/8 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                                <i className="fas fa-check-circle text-indigo-400 text-xs flex-shrink-0"></i>
                                {c}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
