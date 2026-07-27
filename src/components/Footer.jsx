export default function Footer({ darkMode }) {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const year = new Date().getFullYear()

    return (
        <footer className={`py-10 border-t ${darkMode ? 'bg-[#111124] border-white/5' : 'bg-white border-slate-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={e => { e.preventDefault(); scrollToTop() }}
                        className="font-mono text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>&lt;</span>
                        SK
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>/&gt;</span>
                    </a>

                    {/* Copyright */}
                    <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        Designed & Built with{' '}
                        <i className="fas fa-heart text-red-500 animate-pulse-slow"></i>
                        {' '}by{' '}
                        <span className="font-semibold text-indigo-400">Suraj Khaire</span>
                        {' '}· &copy; {year}
                    </p>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
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
                                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 ${darkMode
                                    ? 'bg-white/5 text-slate-400 hover:bg-indigo-500/20 hover:text-indigo-400 border border-white/10'
                                    : 'bg-slate-100 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200'
                                    }`}
                            >
                                <i className={`${s.icon} text-sm`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-all hover:-translate-y-0.5 transform"
                    >
                        <i className="fas fa-chevron-up"></i> Back to top
                    </button>
                </div>
            </div>
        </footer>
    )
}
