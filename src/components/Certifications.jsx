const CERTS = [
    { icon: 'fas fa-certificate', title: 'Postman API Fundamentals Student Expert', org: 'Postman', color: 'from-orange-500 to-amber-500' },
    { icon: 'fas fa-server', title: 'Mainframe Launchpad Certification', org: 'BMC Software', color: 'from-indigo-500 to-violet-500' },
    { icon: 'fas fa-network-wired', title: 'CCNA: Introduction to Networks', org: 'Cisco Networking Academy', color: 'from-blue-500 to-cyan-500' },
    { icon: 'fas fa-award', title: 'Software Copyright Registration — E-Voting System', org: 'Government of India', color: 'from-emerald-500 to-teal-500' },
]

export default function Certifications({ darkMode }) {
    return (
        <section id="certifications" className={`py-24 ${darkMode ? 'bg-[#111124]' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-indigo-400 font-mono text-sm font-medium mb-2">Recognition</p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Certifications & <span className="text-gradient">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                    {CERTS.map(c => (
                        <div
                            key={c.title}
                            className={`flex items-center gap-4 p-5 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-[#1a1a2e] border-white/10 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-300'}`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                <i className={`${c.icon} text-white`}></i>
                            </div>
                            <div>
                                <p className={`font-semibold text-sm leading-snug ${darkMode ? 'text-white' : 'text-slate-800'}`}>{c.title}</p>
                                <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{c.org}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}